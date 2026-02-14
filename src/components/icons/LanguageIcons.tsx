import * as React from 'react';

/**
 * Props for language icon components.
 * Mirrors the lucide-react LucideProps interface for drop-in compatibility.
 */
export interface LanguageIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Icon size (width and height). Accepts number (px) or string. */
  size?: string | number;
}

/**
 * Creates a language icon component with the given SVG path data.
 * All language icons use a 24x24 viewBox with filled paths.
 */
function createLanguageIcon(displayName: string, path: string) {
  const Icon = React.forwardRef<SVGSVGElement, LanguageIconProps>(
    ({ size = 24, className, ...props }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        {...props}
      >
        <path d={path} />
      </svg>
    ),
  );
  Icon.displayName = displayName;
  return Icon;
}

/**
 * JavaScript language icon.
 * Stylized "JS" in a rounded square.
 */
export const JavaScriptIcon = createLanguageIcon(
  'JavaScriptIcon',
  'M2 5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm6.5 12.5c-1 0-1.7-.2-2.3-.6v-1.3c.6.5 1.3.8 2.2.8.7 0 1.1-.2 1.1-.6 0-.3-.2-.5-.7-.7l-1.1-.4c-1.3-.5-1.9-1.1-1.9-2 0-1.1 1-1.9 2.5-1.9.8 0 1.5.2 2 .5v1.3c-.5-.4-1.2-.6-1.9-.6-.6 0-1 .2-1 .5 0 .3.2.4.7.6l1.1.4c1.3.5 1.9 1.1 1.9 2 0 1.2-1 2-2.6 2zm7.5 0c-1.9 0-3.1-1.2-3.1-3.3V8.5h1.6v6.7c0 1.1.6 1.7 1.6 1.7s1.6-.6 1.6-1.7V8.5h1.6v6.7c0 2.1-1.2 3.3-3.1 3.3z',
);

/**
 * Python language icon.
 * Interlocking snakes representing the Python logo.
 */
export const PythonIcon = createLanguageIcon(
  'PythonIcon',
  'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-1.4.4-2.7 1-3.9 1.5 2.2 3.9 3.6 6.6 3.9 0 0-.7 1.5-.7 3 0 1.8 1.2 3.3 2.8 3.8-.4.1-.8.2-1.2.2-.5 0-1-.1-1.4-.2-.2 1.4.3 2.7 1.2 3.6-.3.1-.6.2-1 .2-.3 0-.6 0-.9-.1zm4.1-2.1c-1.5 0-2.8-1.2-2.8-2.8 0-.8.3-1.5.9-2.1.3-.3.7-.5 1.1-.6-.1.4-.2.9-.2 1.3 0 2 1.4 3.6 3.3 3.9-.3.2-.7.3-1.1.3h-.2z',
);

/**
 * Ruby language icon.
 * Stylized gem/cut diamond shape.
 */
export const RubyIcon = createLanguageIcon(
  'RubyIcon',
  'M12 2l2.5 5h5L15.5 10.5 17 16 12 13 7 16l1.5-5.5L4.5 7h5L12 2zm0 3.2L10.5 8h-3l2.4 2.2-.8 3 3.9-2.4 3.9 2.4-.8-3L16.5 8h-3L12 5.2z',
);

/**
 * Go/Golang language icon.
 * Simplified gopher head representation.
 */
export const GoIcon = createLanguageIcon(
  'GoIcon',
  'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c1.7 0 3 1.3 3 3 0 .6-.2 1.1-.5 1.5.9.4 1.5 1.3 1.5 2.3 0 1-.6 1.9-1.5 2.3.3.4.5.9.5 1.5 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-.6.2-1.1.5-1.5-.9-.4-1.5-1.3-1.5-2.3 0-1 .6-1.9 1.5-2.3-.3-.4-.5-.9-.5-1.5 0-1.7 1.3-3 3-3zm0 1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm0 5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z',
);

/**
 * PHP language icon.
 * "PHP" letters in an oval shape.
 */
export const PhpIcon = createLanguageIcon(
  'PhpIcon',
  'M12 2C6.5 2 2 6 2 12s4.5 10 10 10 10-4 10-10S17.5 2 12 2zM6.5 10c1.4 0 2.5 1.1 2.5 2.5S7.9 15 6.5 15H5v3H3V10h3.5zm10 0c1.4 0 2.5 1.1 2.5 2.5S17.9 15 16.5 15H15v3h-2V10h3.5zm-5 0h2v5h1.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H13.5V10H11.5v8h-2V10h2zm-5.5 2H5v2h1c.6 0 1-.4 1-1s-.4-1-1-1zm10 0H15v2h1c.6 0 1-.4 1-1s-.4-1-1-1z',
);

/**
 * Java language icon.
 * Coffee cup with steam lines.
 */
export const JavaIcon = createLanguageIcon(
  'JavaIcon',
  'M8 3c-.6 0-1 .4-1 1v2h2V5h4c.6 0 1-.4 1-1s-.4-1-1-1H8zm8 0c-.6 0-1 .4-1 1v2h2V5h2c.6 0 1-.4 1-1s-.4-1-1-1h-3zM4 9c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h2c1.7 0 3-1.3 3-3s-1.3-3-3-3H4zm1 2h1c.6 0 1 .4 1 1s-.4 1-1 1H5v-2zm5-2c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h2c1.7 0 3-1.3 3-3s-1.3-3-3-3h-2zm1 2h1c.6 0 1 .4 1 1s-.4 1-1 1h-1v-2zm5-2c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1h-2v1h-1v-4h1v1h2v-1c0-.6-.4-1-1-1h-2z',
);
