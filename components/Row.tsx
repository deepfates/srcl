
import styles from '@components/Row.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

type RowProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
  className?: string;
};

const Row = React.forwardRef<HTMLElement, RowProps>(({ children, className, ...rest }, ref) => {
  return (
    <section className={Utilities.classNames(styles.row, className)} ref={ref} {...rest}>
      {children}
    </section>
  );
});

Row.displayName = 'Row';

export default Row;
