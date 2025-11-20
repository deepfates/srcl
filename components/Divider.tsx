import styles from '@components/Divider.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface DividerProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  type?: string | any;
  style?: any;
}

const Divider: React.FC<DividerProps> = ({ children, style, className, type, ...rest }) => {
  if (type === 'GRADIENT') {
    return <div className={Utilities.classNames(styles.gradient, className)} style={style} {...rest} />;
  }

  if (type === 'DOUBLE') {
    return (
      <div className={Utilities.classNames(styles.divider, className)} style={style} {...rest}>
        <div className={styles.line} style={{ marginBottom: `2px` }} />
        <div className={styles.line} />
      </div>
    );
  }

  return (
    <div className={Utilities.classNames(styles.divider, className)} style={style} {...rest}>
      <div className={styles.line} />
    </div>
  );
};

export default Divider;
