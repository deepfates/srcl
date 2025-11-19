import styles from '@components/ActionButton.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface ActionButtonProps {
  onClick?: () => void;
  hotkey?: any;
  children?: React.ReactNode;
  style?: any;
  className?: string;
  rootStyle?: any;
  isSelected?: boolean;
}

const ActionButton = React.forwardRef<HTMLButtonElement, ActionButtonProps>(({ onClick, hotkey, children, style, rootStyle, isSelected, className }, ref) => {
  return (
    <button className={Utilities.classNames(styles.root, isSelected ? styles.selected : null, className)} style={rootStyle} onClick={onClick} tabIndex={0} ref={ref} type="button">
      {Utilities.isEmpty(hotkey) ? null : <span className={styles.hotkey}>{hotkey}</span>}
      <span className={styles.content} style={style}>
        {children}
      </span>
    </button>
  );
});

ActionButton.displayName = 'ActionButton';

export default ActionButton;
