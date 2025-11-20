import styles from '@components/ContentFluid.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface ContentFluidProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  className?: string;
}

const ContentFluid: React.FC<ContentFluidProps> = ({ children, className, ...rest }) => {
  return (
    <div className={Utilities.classNames(styles.root, className)} {...rest}>
      {children}
    </div>
  );
};

export default ContentFluid;
