import styles from '@components/MessageViewer.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface MessageViewerProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const MessageViewer: React.FC<MessageViewerProps> = ({ style, className, children }) => {
  return (
    <div className={Utilities.classNames(styles.message, className)} style={style}>
      <div className={styles.left}>
        <div className={styles.bubble}>{children}</div>
      </div>
      <div className={styles.right}>
        <figure className={styles.triangle} />
      </div>
    </div>
  );
};

export default MessageViewer;
