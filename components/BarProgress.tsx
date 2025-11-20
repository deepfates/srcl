import styles from '@components/BarProgress.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface BarProgressProps {
  style?: React.CSSProperties;
  className?: string;
  intervalRate?: number;
  progress?: number;
  fillChar?: string;
}

const BarProgress: React.FC<BarProgressProps> = ({ style, className, intervalRate, progress, fillChar = '░' }) => {
  const [currentProgress, setCurrentProgress] = React.useState(progress ?? 0);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [charWidth, setCharWidth] = React.useState(0);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const measureRef = React.useRef<HTMLSpanElement>(null);
  const lastWidthRef = React.useRef(0);
  const debounceTimerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (typeof progress === 'number') {
      setCurrentProgress(progress);
      return;
    }
    if (!intervalRate) return;
    const interval = setInterval(() => {
      setCurrentProgress((prev) => (prev + 10) % 110);
    }, intervalRate);
    return () => clearInterval(interval);
  }, [intervalRate, progress]);

  React.useLayoutEffect(() => {
    const el = measureRef.current;
    if (!el) return;

    let cancelled = false;

    const tryMeasure = () => {
      if (!measureRef.current) return;
      const rect = measureRef.current.getBoundingClientRect();
      if (rect.width > 0) {
        setCharWidth((prev) => (Math.abs(prev - rect.width) > 0.25 ? rect.width : prev));
      } else {
        requestAnimationFrame(() => {
          const retryRect = measureRef.current?.getBoundingClientRect();
          if (retryRect && retryRect.width > 0) {
            setCharWidth((prev) => (Math.abs(prev - retryRect.width) > 0.25 ? retryRect.width : prev));
          }
        });
      }
    };

    // Initial measurement, with rAF retry
    tryMeasure();

    // Re-measure when fonts are ready (prevents layout jump flicker)
    const fonts: any = (document as any).fonts;
    if (fonts && typeof fonts.ready?.then === 'function') {
      fonts.ready.then(() => {
        if (cancelled) return;
        tryMeasure();
      });
    }

    return () => {
      cancelled = true;
    };
  }, [fillChar]);

  React.useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const onResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { width } = entry.contentRect;

        // Ignore no-op changes to prevent thrash
        if (Math.abs(width - lastWidthRef.current) < 0.5) {
          continue;
        }

        // Debounce width updates to reduce re-render flicker
        if (debounceTimerRef.current !== null) {
          window.clearTimeout(debounceTimerRef.current);
        }
        debounceTimerRef.current = window.setTimeout(() => {
          lastWidthRef.current = width;
          setContainerWidth(width);
        }, 50);
      }
    };

    const observer = new ResizeObserver(onResize);
    observer.observe(node);

    return () => {
      observer.disconnect();
      if (debounceTimerRef.current !== null) {
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }
    };
  }, []);

  const cappedProgress = Math.min(currentProgress, 100);

  let maxChars = 10;
  if (charWidth > 0 && containerWidth > 0) {
    maxChars = Math.max(1, Math.floor(containerWidth / charWidth));
  }

  const filledChars = Math.round((cappedProgress / 100) * maxChars);
  const barStr = fillChar.repeat(filledChars);

  return (
    <div className={Utilities.classNames(styles.root, className)} style={style} ref={containerRef} aria-valuenow={cappedProgress} aria-valuemin={0} aria-valuemax={100} role="progressbar">
      <span ref={measureRef} className={styles.measure}>
        {fillChar}
      </span>
      {barStr}
    </div>
  );
};

export default BarProgress;
