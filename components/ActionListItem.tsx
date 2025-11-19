import styles from '@components/ActionListItem.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

interface ActionListItemProps {
  style?: React.CSSProperties;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
  disabled?: boolean;
}

const ActionListItem: React.FC<ActionListItemProps> = (props) => {
  const { href, target, onClick, children, icon, style, className, disabled } = props;

  if (disabled) {
    return (
      <div className={styles.disabled} style={style} tabIndex={-1} role="button" aria-disabled="true">
        <figure className={styles.icon}>{icon}</figure>
        <span className={Utilities.classNames(styles.text, className)}>{children}</span>
      </div>
    );
  }

  if (href) {
    return (
      <a className={styles.item} href={href} target={target} style={style} tabIndex={0} role="link">
        <figure className={styles.icon}>{icon}</figure>
        <span className={Utilities.classNames(styles.text, className)}>{children}</span>
      </a>
    );
  }

  return (
    <div className={styles.item} onClick={onClick} style={style} tabIndex={0} role="button">
      <figure className={styles.icon}>{icon}</figure>
      <span className={Utilities.classNames(styles.text, className)}>{children}</span>
    </div>
  );
};

export default ActionListItem;
