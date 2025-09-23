
import styles from '@components/Checkbox.module.scss';
import * as React from 'react';
import * as Utilities from '@common/utilities';

interface CheckboxProps {
  style?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
  name: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  children?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ style, name, defaultChecked = false, checked, onChange, children }) => {
  const checkboxId = `${name}-checkbox`;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [isChecked, setIsChecked] = React.useState(checked ?? defaultChecked);
  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        inputRef.current?.click();
        break;
      case 'ArrowUp':
      case 'ArrowLeft': {
        event.preventDefault();
        const previousFocusable = Utilities.findNextFocusable(document.activeElement, 'previous');
        previousFocusable?.focus();
        break;
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        event.preventDefault();
        const nextFocusable = Utilities.findNextFocusable(document.activeElement, 'next');
        nextFocusable?.focus();
        break;
      }
      default:
        break;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedStatus = event.target.checked;
    if (checked === undefined) {
      setIsChecked(newCheckedStatus);
    }
    if (onChange) {
      onChange(event);
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      className={Utilities.classNames(styles.section, {
        [styles.checked]: isChecked,
        [styles.focused]: isFocused,
      })}
      style={style}
    >
      <div className={styles.relative}>
        <input
          className={styles.input}
          id={checkboxId}
          type="checkbox"
          name={name}
          defaultChecked={checked === undefined ? defaultChecked : undefined}
          checked={checked !== undefined ? checked : undefined}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          tabIndex={0}
          ref={inputRef}
        />
        <label className={styles.figure} htmlFor={checkboxId}>
          {isChecked ? '╳' : '\u00A0'}
        </label>
      </div>
      <div className={styles.right}>&nbsp;&nbsp;{children}</div>
    </div>
  );
};

export default Checkbox;
