import styles from '@components/Text.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
  className?: string;
}

const Text: React.FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <p className={Utilities.classNames(styles.text, className)} {...rest}>
      {children}
    </p>
  );
};

export default Text;
