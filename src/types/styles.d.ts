/* Global type declarations for SCSS modules and global SCSS imports */

/* SCSS Modules (*.module.css / *.module.sass) return a mapping of class names */
declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

/* Global SCSS/SASS imports (e.g., import '@root/global.css') resolve to a string */
declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.sass' {
  const content: string;
  export default content;
}
