
import styles from '@components/RowEllipsis.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

type RowEllipsisProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
  className?: string;
};

const RowEllipsis = React.forwardRef<HTMLElement, RowEllipsisProps>(({ children, className, ...rest }, ref) => {
  return (
    <section className={Utilities.classNames(styles.row, className)} ref={ref} {...rest}>
      {children}
    </section>
  );
});

RowEllipsis.displayName = 'RowEllipsis';

export default RowEllipsis;
