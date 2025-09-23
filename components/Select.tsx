
import styles from '@components/Select.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

interface SelectProps {
  name: string;
  options: string[];
  placeholder?: string;
  defaultValue?: string;
  onChange?: (selectedValue: string) => void;
  value?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({ name, options, placeholder, defaultValue = '', onChange, value, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [index, setIndex] = React.useState(-1);
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  const containerRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  React.useEffect(() => {
    if (value === undefined) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue, value]);

  const handleOpen = () => {
    setIsOpen(true);
    const currentIndex = options.indexOf(selectedValue);
    setIndex(currentIndex >= 0 ? currentIndex : 0);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIndex(-1);

    if (containerRef && containerRef.current) {
      containerRef.current?.focus();
    }
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
    handleClose();
  };

  return (
    <>
      <section className={Utilities.classNames(styles.select, className)}>
        <figure
          className={Utilities.classNames(isOpen ? styles.focused : null, styles.control)}
          onClick={() => {
            isOpen ? handleClose() : handleOpen();
          }}
        >
          ▼
        </figure>
        <button
          className={Utilities.classNames(styles.display, className)}
          ref={containerRef}
          tabIndex={0}
          onClick={() => {
            isOpen ? handleClose() : handleOpen();
          }}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedValue || placeholder}
        </button>
      </section>

      {isOpen && (
        <ul className={styles.menu} role="listbox">
          {options.map((option, idx) => {
            return (
              <li key={option} role="option" tabIndex={0} className={Utilities.classNames(styles.item)} onClick={() => handleSelect(option)}>
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Select;
