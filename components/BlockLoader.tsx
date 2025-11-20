
import styles from '@components/BlockLoader.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

const SEQUENCES = [
  ['⠁', '⠂', '⠄', '⡀', '⢀', '⠠', '⠐', '⠈'],
  ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷'],
  ['▖', '▘', '▝', '▗'],
  ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█', '▇', '▆', '▅', '▄', '▃', '▁'],
  ['▉', '▊', '▋', '▌', '▍', '▎', '▏', '▎', '▍', '▌', '▋', '▊', '▉'],
  ['←', '↖', '↑', '↗', '→', '↘', '↓', '↙'],
  ['┤', '┘', '┴', '└', '├', '┌', '┬', '┐'],
  ['◢', '◣', '◤', '◥'],
  ['◰', '◳', '◲', '◱'],
  ['◴', '◷', '◶', '◵'],
  ['◐', '◓', '◑', '◒'],
];

export interface BlockLoaderProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  mode?: number;
}

const BlockLoader: React.FC<BlockLoaderProps> = ({ style, className, mode = 0 }) => {
  if (!SEQUENCES[mode]) {
    return <span className={styles.block}>�</span>;
  }

  const [index, setIndex] = React.useState(0);
  const intervalRef = React.useRef<number | null>(null);
  const indexLength = SEQUENCES[mode].length;

  React.useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = window.setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % indexLength);
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [indexLength]);

  return <span className={Utilities.classNames(styles.root, className)} style={style}>{SEQUENCES[mode][index]}</span>;
};

export default BlockLoader;
