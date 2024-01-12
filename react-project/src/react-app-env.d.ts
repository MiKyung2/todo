/// <reference types="react-scripts" />

namespace JSX {
  interface IntrinsicElements {
    ['edit-word']: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    ['add-todo']: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    ['hddn-button']: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    ['hddn-input']: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >;
  }
}

declare module '*.html' {
  const content: string;
  export default content;
}
