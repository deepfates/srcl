
import styles from '@components/Avatar.module.scss';
import Dither from '@components/dither';
import * as React from 'react';
import * as Utilities from '@common/utilities';
import type { RGBColor } from '@lib/dither';
import useThemeTwoColor from '@lib/useThemeTwoColor';

interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  src?: string;
  href?: string;
  target?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  alt?: string;
}

/**
 * Avatar
 * - Computes theme colors from CSS variables to build a two-color halftone palette:
 *   base = [theme-background (paper), theme-text (ink)]
 *   hover/focus ink = theme-focused-foreground
 * - Recomputes palette when the theme (body class) changes.
 * - Proxies remote images through a local API to avoid tainted canvas issues.
 * - Uses Dither in twoColor mode only (no CRT animation).
 */
const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, alt, style: propStyle, href, target, children, ...rest } = props;

  const { palette, hoverInk, ready } = useThemeTwoColor();
  const [active, setActive] = React.useState(false);


  // Trim the raw src once; Dither handles proxying/fallback logic internally.
  const imageSrc = React.useMemo(() => (typeof src === 'string' ? src.trim() : ''), [src]);


  let avatarElement: React.ReactNode;

  if (imageSrc && ready && palette) {
    const twoColor: [RGBColor, RGBColor] = [palette[0], active && hoverInk ? hoverInk : palette[1]];
    const ditherElement = <Dither src={imageSrc} alt={alt ?? ''} width={38} height={38} twoColor={twoColor} className={styles.ditherCanvas} />;

    if (href) {
      avatarElement = (
        <a className={Utilities.classNames(styles.root, styles.link)} href={href} target={target} tabIndex={0} role="link" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} onFocus={() => setActive(true)} onBlur={() => setActive(false)}>
          {ditherElement}
        </a>
      );
    } else {
      avatarElement = (
        <figure className={styles.root} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} onFocus={() => setActive(true)} onBlur={() => setActive(false)} style={propStyle}>
          {ditherElement}
        </figure>
      );
    }
  } else {
    // Placeholder while palette not yet computed or no src provided
    if (href) {
      avatarElement = <a className={styles.placeholder} style={propStyle} href={href} target={target} tabIndex={0} role="link" />;
    } else {
      avatarElement = <figure className={styles.placeholder} style={propStyle} />;
    }
  }

  if (!children) {
    return avatarElement as React.ReactElement;
  }

  return (
    <div className={styles.parent} {...rest}>
      {avatarElement}
      <span className={styles.right}>{children}</span>
    </div>
  );
};

export default Avatar;
