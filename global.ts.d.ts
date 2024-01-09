declare module '*.png' {
  const value: any;
  export = value;
}
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const source: string;
  export default source;
}
