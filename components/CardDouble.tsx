import styles from '@components/CardDouble.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  title?: string | any;
  mode?: string | any;
  style?: any;
}

const CardDouble: React.FC<CardProps> = ({ children, className, mode, title, style, ...rest }) => {
  let titleElement = (
    <header className={styles.action}>
      <div className={styles.left} aria-hidden="true"></div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.right} aria-hidden="true"></div>
    </header>
  );

  if (mode === 'left') {
    titleElement = (
      <header className={styles.action}>
        <div className={styles.leftCorner} aria-hidden="true"></div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.right} aria-hidden="true"></div>
      </header>
    );
  }

  if (mode === 'right') {
    titleElement = (
      <header className={styles.action}>
        <div className={styles.left} aria-hidden="true"></div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rightCorner} aria-hidden="true"></div>
      </header>
    );
  }

  return (
    <article className={Utilities.classNames(styles.card, className)} {...rest}>
      {titleElement}
      <section className={styles.children}>
        <section className={styles.borderChildren} style={style}>
          {children}
        </section>
      </section>
    </article>
  );
};

export default CardDouble;
