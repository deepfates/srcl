
import styles from '@components/RowSpaceBetween.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

type RowSpaceBetweenProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
  className?: string;
};

const RowSpaceBetween = React.forwardRef<HTMLElement, RowSpaceBetweenProps>(({ children, className, ...rest }, ref) => {
  return (
    <section className={Utilities.classNames(styles.row, className)} ref={ref} {...rest}>
      {children}
    </section>
  );
});

RowSpaceBetween.displayName = 'RowSpaceBetween';

export default RowSpaceBetween;
