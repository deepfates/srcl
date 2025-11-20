import styles from '@components/AlertBanner.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface AlertBannerProps {
  style?: any;
  className?: string;
  children?: any;
}

const AlertBanner: React.FC<AlertBannerProps> = ({ style: propStyle, className, ...rest }) => {
  let style: React.CSSProperties = { ...propStyle };

  return <div className={Utilities.classNames(styles.root, className)} {...rest} style={style} />;
};

export default AlertBanner;
