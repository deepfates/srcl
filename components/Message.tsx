import styles from '@components/Message.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface MessageProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const Message: React.FC<MessageProps> = ({ style, className, children }) => {
  return (
    <div className={Utilities.classNames(styles.message, className)} style={style}>
      <div className={styles.left}>
        <figure className={styles.triangle} />
      </div>
      <div className={styles.right}>
        <div className={styles.bubble}>{children}</div>
      </div>
    </div>
  );
};

export default Message;
