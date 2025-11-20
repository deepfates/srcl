
import styles from '@components/Navigation.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  logoHref?: string;
  logoTarget?: React.HTMLAttributeAnchorTarget;
  onClickLogo?: React.MouseEventHandler<HTMLButtonElement>;
  logo?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Navigation: React.FC<NavigationProps> = ({ children, logoHref, logoTarget, onClickLogo, logo, left, right, className, style, ...rest }) => {
  let logoElement = <button className={styles.logo}>{logo}</button>;

  if (onClickLogo) {
    logoElement = (
      <button className={styles.logo} onClick={onClickLogo}>
        {logo}
      </button>
    );
  }

  if (logoHref) {
    logoElement = (
      <a href={logoHref} className={styles.logo} target={logoTarget}>
        {logo}
      </a>
    );
  }

  return (
    <nav className={Utilities.classNames(styles.root, className)} style={style} {...rest}>
      {logoElement}
      <section className={styles.left}>{left}</section>
      <section className={styles.children}>{children}</section>
      <section className={styles.right}>{right}</section>
    </nav>
  );
};

export default Navigation;
