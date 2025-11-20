
import styles from '@components/Badge.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children?: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ children, className, ...rest }) => {
  return (
    <span className={Utilities.classNames(styles.root, className)} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
