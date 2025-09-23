import styles from '@components/Card.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string | any;
  mode?: string | any;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, mode, title, className, style, ...rest }) => {
  let titleElement = (
    <header className={styles.action}>
      <div className={styles.left} aria-hidden="true"></div>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
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
    <article className={Utilities.classNames(styles.card, className)} style={style} {...rest}>
      {titleElement}
      <section className={styles.children}>{children}</section>
    </article>
  );
};

export default Card;
