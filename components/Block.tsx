import styles from '@components/Block.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export type BlockProps = Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'>

const Block: React.FC<BlockProps> = ({ className, ...rest }) => {
  return (
    <span className={Utilities.classNames(styles.block, className)} {...rest}/>
  );
};

export default Block;
