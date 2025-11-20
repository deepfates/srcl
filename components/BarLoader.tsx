
import * as React from 'react';
import * as Utilities from '@common/utilities';

import styles from '@components/BarLoader.module.css';

export interface BarLoaderProps {
  style?: React.CSSProperties;
  className?: string;
  intervalRate?: number;
  progress?: number;
}

const BarLoader: React.FC<BarLoaderProps> = ({ style, className, intervalRate, progress }) => {
  const [currentProgress, setCurrentProgress] = React.useState<number>(progress || 0);

  React.useEffect(() => {
    if (progress !== undefined) {
      setCurrentProgress(progress);
      return;
    }

    if (!intervalRate) return;

    const interval = setInterval(() => {
      setCurrentProgress((prev) => (prev + 10) % 110);
    }, intervalRate);

    return () => clearInterval(interval);
  }, [intervalRate, progress]);

  return (
    <div className={Utilities.classNames(styles.root, className)} style={style}>
      <div
        className={styles.bar}
        style={{
          width: `${Math.min(currentProgress, 100)}%`,
        }}
      ></div>
    </div>
  );
};

export default BarLoader;
