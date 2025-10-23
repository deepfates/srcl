import React from 'react';
import Dither from '@components/dither';
import type { RGBColor } from '@lib/dither';
import getSafeImageSrc from '@lib/getSafeImageSrc';
import useThemeTwoColor from '@lib/useThemeTwoColor';

export interface HalftoneImageProps extends React.HTMLAttributes<HTMLElement> {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  // Optional: override caption text or hide it
  caption?: string | null;
}

/**
 * HalftoneImage
 * Example component that applies the theme-driven two-color halftone
 * to any image using the `useThemeTwoColor` hook.
 *
 * - Base ink: theme-text
 * - Paper: theme-background
 * - Hover ink: theme-focused-foreground
 *
 * Usage:
 *   <HalftoneImage src="/images/photo.jpg" width={320} height={200} />
 *   <HalftoneImage src="https://..." width={320} height={200} />
 *
 * Notes:
 * - Cross-origin images are proxied automatically when available and fall back
 *   to an unfiltered render if the proxy cannot be reached.
 */
const HalftoneImage: React.FC<HalftoneImageProps> = ({ src, alt = '', width = 320, height = 200, caption = 'Hover to highlight', style, className, ...rest }) => {
  const { palette, hoverInk, ready } = useThemeTwoColor();
  const [active, setActive] = React.useState(false);

  const rawSrc = React.useMemo(() => (typeof src === 'string' ? src.trim() : ''), [src]);
  const safeSrc = React.useMemo(() => getSafeImageSrc(rawSrc) ?? rawSrc, [rawSrc]);

  if (!ready || !palette) return null;

  const twoColor: [RGBColor, RGBColor] = [palette[0], active && hoverInk ? hoverInk : palette[1]];

  return (
    <figure {...rest} className={className} style={{ display: 'inline-block', margin: 0, ...style }} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} onFocus={() => setActive(true)} onBlur={() => setActive(false)} tabIndex={0}>
      <Dither src={safeSrc} alt={alt} width={width} height={height} twoColor={twoColor} />
      {caption !== null ? <figcaption style={{ opacity: 0.6, fontSize: '0.8em', marginTop: 4 }}>{caption}</figcaption> : null}
    </figure>
  );
};

export default HalftoneImage;
