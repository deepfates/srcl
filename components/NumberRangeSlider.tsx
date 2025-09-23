
import styles from '@components/NumberRangeSlider.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

interface RangerProps {
  defaultValue?: number;
  value?: number;
  max?: number;
  min?: number;
  step?: number;
  onChange?: (value: number) => void;
  className?: string;
}

const NumberRangeSlider: React.FC<RangerProps> = ({ defaultValue = 0, value, max = 5000, min = 0, step = 1, onChange, className }) => {
  const sliderRef = React.useRef<HTMLInputElement>(null);
  const decimals = step.toString().includes('.') ? step.toString().split('.')[1]?.length ?? 0 : 0;
  const [maxIntegerPart] = max.toString().split('.');
  const integerDigits = maxIntegerPart.length;

  const [displayValue, setDisplayValue] = React.useState<number>(value ?? defaultValue);

  const padValue = (input: number): string => {
    const fixed = input.toFixed(decimals);
    if (!decimals) {
      return fixed.padStart(integerDigits, '0');
    }
    const [integer, fraction = ''] = fixed.split('.');
    return `${integer.padStart(integerDigits, '0')}.${fraction}`;
  };

  React.useEffect(() => {
    const activeValue = value ?? defaultValue;
    if (sliderRef.current) {
      sliderRef.current.value = String(activeValue);
    }
    setDisplayValue(activeValue);
  }, [defaultValue, value]);

  const scrub = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const parsedValue = parseFloat(event.target.value);
    setDisplayValue(parsedValue);
    if (onChange) {
      onChange(parsedValue);
    }
  };

  return (
    <div className={Utilities.classNames(styles.root, className)}>
      <label className={styles.left}>
        <div className={styles.amount}>{padValue(displayValue)}</div>
      </label>
      <input
        className={styles.slider}
        defaultValue={value === undefined ? defaultValue : undefined}
        value={value !== undefined ? value : undefined}
        max={max}
        min={min}
        onChange={scrub}
        ref={sliderRef}
        role="slider"
        step={step}
        tabIndex={0}
        type="range"
      />
    </div>
  );
};

export default NumberRangeSlider;
