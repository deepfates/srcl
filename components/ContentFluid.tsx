import styles from '@components/ContentFluid.module.css';

import * as React from 'react';

export interface ContentFluidProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

const ContentFluid: React.FC<ContentFluidProps> = ({ children, ...rest }) => {
  return (
    <div className={styles.root} {...rest}>
      {children}
    </div>
  );
};

export default ContentFluid;
