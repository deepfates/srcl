import styles from '@components/page/DefaultActionBar.module.css';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import { toggleDebugGrid } from '@components/DebugGrid';
import { useHotkeys } from '@modules/hotkeys';

import ActionBar from '@components/ActionBar';
import ButtonGroup from '@components/ButtonGroup';

function isElement(target: EventTarget | null): target is Element {
  return target instanceof Element;
}

function isHTMLElement(target: EventTarget | null): target is HTMLElement {
  return target instanceof HTMLElement;
}

const findFocusableParent = (element: Element | null): Element | null => {
  while (element) {
    element = element.parentElement;
    if (element && Utilities.isFocusableElement(element)) {
      return element;
    }
  }
  return null;
};

const findNextFocusableSibling = (element: Element, direction: 'next' | 'previous'): HTMLElement | null => {
  let sibling = direction === 'next' ? element.nextElementSibling : element.previousElementSibling;

  while (sibling) {
    if (Utilities.isFocusableElement(sibling)) {
      return sibling as HTMLElement;
    }

    const focusableDescendant = Utilities.findFocusableDescendant(sibling, null, direction);
    if (focusableDescendant) {
      return focusableDescendant;
    }

    sibling = direction === 'next' ? sibling.nextElementSibling : sibling.previousElementSibling;
  }

  return null;
};

const findNextFocusableAncestor = (element: Element, direction: 'next' | 'previous'): HTMLElement | null => {
  let ancestor = element.parentElement;

  while (ancestor) {
    const nextFocusable = findNextFocusableSibling(ancestor, direction);
    if (nextFocusable) {
      return nextFocusable;
    }
    ancestor = ancestor.parentElement;
  }

  return null;
};

const useGlobalNavigationHotkeys = () => {
  const onHandleSubmit = (event: KeyboardEvent) => {
    const target = event.target;
    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();
      (target as HTMLElement).click();
    }
  };

  const onHandleNextFocus = (event: KeyboardEvent) => {
    const target = event.target;

    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();

      const nextFocusable = Utilities.findNextFocusable(target as Element, 'next');
      if (nextFocusable) {
        nextFocusable.focus();
      }
    }
  };

  const onHandlePreviousFocus = (event: KeyboardEvent) => {
    const target = event.target;

    if (Utilities.isFocusableElement(target)) {
      event.preventDefault();

      const previousFocusable = Utilities.findNextFocusable(target as Element, 'previous');
      if (previousFocusable) {
        previousFocusable.focus();
      }
    }
  };

  useHotkeys('ArrowDown', onHandleNextFocus);
  useHotkeys('ArrowUp', onHandlePreviousFocus);
  useHotkeys('ArrowRight', onHandleNextFocus);
  useHotkeys('ArrowLeft', onHandlePreviousFocus);
  useHotkeys('Enter', onHandleSubmit);
  useHotkeys(' ', onHandleSubmit);
};

interface DefaultActionBarProps {
  items?: {
    hotkey: string;
    onClick: () => void;
    body: React.ReactNode;
    items?: any;
  }[];
}

type FontConfig = {
  name: string;
  className: string;
  isDefault?: boolean;
};

const FONT_CATEGORIES: FontConfig[][] = [
  // System core
  [
    { name: 'Berkeley Mono™', className: 'font-use-berkeley-mono' },
    { name: 'Commit Mono', className: 'font-use-commit-mono' },
    { name: 'Geist Mono (Default)', className: 'font-use-geist-mono', isDefault: true },
    { name: 'JuliaMono', className: 'font-use-julia-mono' },
    { name: 'Neon', className: 'font-use-monaspace-neon' },
  ],
  // Round/Wide
  [
    { name: 'Argon', className: 'font-use-monaspace-argon' },
    { name: 'Atkinson Hyperlegible Mono', className: 'font-use-atkinson-hyperlegible-mono' },
    { name: 'Space Mono', className: 'font-use-space-mono' },
    { name: 'Fira Code', className: 'font-use-fira-code' },
  ],
  // Angular/Narrow
  [
    { name: 'Iosevka Term', className: 'font-use-iosevka-term' },
    { name: 'Krypton', className: 'font-use-monaspace-krypton' },
    { name: 'Share Tech Mono', className: 'font-use-share-tech-mono' },
    { name: 'VT323', className: 'font-use-vt323' },
    { name: 'Workbench', className: 'font-use-workbench' },
  ],
  // Hand
  [
    { name: 'Anonymous Pro', className: 'font-use-anonymous-pro' },
    { name: 'Radon', className: 'font-use-monaspace-radon' },
    { name: 'Serious Shanns', className: 'font-use-serious-shanns' },
    { name: 'Victor Mono', className: 'font-use-victor-mono' },
  ],
  // Type
  [
    { name: 'Latin Modern Mono', className: 'font-use-latin-modern-mono' },
    { name: 'SFMono Square', className: 'font-use-sfmono-square' },
    { name: 'TT2020', className: 'font-use-tt2020' },
  ],
  // Serif
  [
    { name: 'Xanh Mono', className: 'font-use-xanh-mono' },
    { name: 'Xenon', className: 'font-use-monaspace-xenon' },
  ],
];

type ThemeConfig = {
  name: string;
  className: string;
  isDefault?: boolean;
  category?: string;
};

const THEME_CATEGORIES: { label?: string; themes: ThemeConfig[] }[] = [
  {
    label: 'Light themes',
    themes: [
      { name: 'Aperture', className: 'theme-aperture' },
      { name: 'Highlight', className: 'theme-light' },
      { name: 'Westworld', className: 'theme-westworld' }
    ]
  },
  {
    label: 'Dark themes',
    themes: [
      { name: 'BSOD', className: 'theme-blue' },
      { name: 'Midnight', className: 'theme-dark' },
      { name: 'Matrix', className: 'theme-green' }
    ]
  },
  {
    label: 'Terminal/CRT themes',
    themes: [
      { name: 'Neon', className: 'theme-black-red' },
      { name: 'Phosphor', className: 'theme-black-green' },
      { name: 'Sulfur', className: 'theme-black-amber' },
    ]
  },
  {
    label: 'Sci-Fi themes',
    themes: [
      { name: '2049', className: 'theme-blade' },
      { name: 'Hologram', className: 'theme-hologram' },
      { name: 'LCARS', className: 'theme-lcars' },
      { name: 'NERV', className: 'theme-nerv' },
      { name: 'Neo-Tokyo', className: 'theme-akira' },
      { name: 'Nostromo', className: 'theme-nostromo' }
    ]
  },
  {
    label: 'Retro/Gaming themes',
    themes: [
      { name: 'Mac OS 9', className: 'theme-macos9' },
      { name: 'Outrun', className: 'theme-outrun' },
      { name: 'Windows 95', className: 'theme-win95' },
    ]
  }
];

const createFontItem = (
  font: FontConfig,
  currentFont: string,
  handleFontChange: (className: string) => void
) => {
  const isSelected = font.isDefault
    ? currentFont === font.className || !currentFont
    : currentFont === font.className;

  return {
    icon: isSelected ? '●' : '○',
    children: font.name,
    onClick: () => handleFontChange(font.className),
    className: font.className,
  };
};

const createFontItems = (
  currentFont: string,
  handleFontChange: (className: string) => void
) => {
  const items: any[] = [];

  FONT_CATEGORIES.forEach((category, categoryIndex) => {
    // Add spacer before each category (except first)
    if (categoryIndex > 0) {
      items.push({
        icon: '',
        children: '',
        disabled: true,
      });
    }

    // Add fonts in this category
    category.forEach((font) => {
      items.push(createFontItem(font, currentFont, handleFontChange));
    });
  });

  return items;
};

// Helper: get theme colors by reading CSS variables from the theme class
const getThemePreviewStyle = (themeClassName: string): { color?: string; background?: string } => {
  // Create a temporary element with the theme class to read CSS variables
  const tempEl = document.createElement('div');
  tempEl.className = themeClassName;
  tempEl.style.position = 'absolute';
  tempEl.style.visibility = 'hidden';
  tempEl.style.pointerEvents = 'none';
  document.body.appendChild(tempEl);

  try {
    const computedStyle = window.getComputedStyle(tempEl);
    const background = computedStyle.getPropertyValue('--theme-background').trim();
    const text = computedStyle.getPropertyValue('--theme-text').trim();

    // Only return styles if we got valid values
    if (background && text) {
      return {
        background: background || undefined,
        color: text || undefined,
      };
    }
  } catch (error) {
    // Fallback if something goes wrong
  } finally {
    // Always clean up the temporary element
    if (tempEl.parentNode) {
      document.body.removeChild(tempEl);
    }
  }

  return {};
};

const createThemeItem = (
  theme: ThemeConfig,
  currentTheme: string,
  handleThemeChange: (className: string) => void
) => {
  const isSelected = theme.isDefault
    ? currentTheme === theme.className || !currentTheme
    : currentTheme === theme.className;

  const style = getThemePreviewStyle(theme.className);

  return {
    icon: isSelected ? '●' : '○',
    children: (
      <span
        style={{
          color: style.color,
          background: 'none',
          fontWeight: isSelected ? 600 : 500,
          textDecoration: 'none',
          padding: '0 2px',
          verticalAlign: 'middle',
        }}
      >
        {theme.name}
      </span>
    ),
    onClick: () => handleThemeChange(theme.className),
    className: theme.className,
  };
};

const createThemeItems = (
  currentTheme: string,
  handleThemeChange: (className: string) => void
) => {
  const items: any[] = [];

  THEME_CATEGORIES.forEach((categoryObj, idx) => {
    // Add spacer before each category (even the first, for parity with old code)
    items.push({
      icon: '',
      children: '',
      disabled: true,
    });

    categoryObj.themes.forEach((theme) => {
      items.push(createThemeItem(theme, currentTheme, handleThemeChange));
    });
  });

  return items;
};

const DefaultActionBar: React.FC<DefaultActionBarProps> = ({ items = [] }) => {
  const [currentFont, setCurrentFont] = React.useState<string>('');
  const [currentTheme, setCurrentTheme] = React.useState<string>('');

  // Track current font and theme from body classes
  React.useEffect(() => {
    const updateCurrent = () => {
      const bodyClasses = Array.from(document.body.classList);
      const fontClass = bodyClasses.find((c) => c.startsWith('font-use-')) || '';
      const themeClass = bodyClasses.find((c) => c.startsWith('theme-')) || 'theme-black-amber';
      setCurrentFont(fontClass);
      setCurrentTheme(themeClass);
    };

    updateCurrent();

    // Watch for class changes
    const observer = new MutationObserver(updateCurrent);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useHotkeys('ctrl+g', () => toggleDebugGrid());

  useGlobalNavigationHotkeys();

  const handleFontChange = (className: string) => {
    Utilities.onHandleFontChange(className);
    setCurrentFont(className);
  };

  const handleThemeChange = (className: string) => {
    Utilities.onHandleThemeChange(className);
    setCurrentTheme(className);
  };

  return (
    <div className={styles.root}>
      <ActionBar
        items={[
          {
            hotkey: '⌃+O',
            body: 'Fonts',
            openHotkey: 'ctrl+o',
            items: createFontItems(currentFont, handleFontChange),
          },
          {
            hotkey: '⌃+T',
            body: 'Theme',
            openHotkey: 'ctrl+t',
            items: createThemeItems(currentTheme, handleThemeChange),
          },
          {
            hotkey: '⌃+G',
            onClick: () => {
              toggleDebugGrid();
            },
            body: 'Grid',
            selected: false,
          },
          ...items,
        ]}
      />
    </div>
  );
};

export default DefaultActionBar;
