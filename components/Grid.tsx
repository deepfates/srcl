import styles from '@components/Grid.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const Grid: React.FC<GridProps> = ({ children, className, ...rest }) => {
  return (
    <div className={Utilities.classNames(styles.grid, className)} {...rest}>
      {children}
    </div>
  );
};

export default Grid;
