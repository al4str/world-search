declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    BUILD_MODERNITY: 'modern' | 'legacy';
    DEPLOY_ENV: 'local' | 'development' | 'production';
  }
}

declare interface Window {
  __INJECTABLE_ASSETS__: Record<string, string>;
  __INJECTABLE_CHUNKS__: Record<string, string[]>;
}

declare module '*.svg' {
  import { SVGProps } from 'react';

  const SVGComponent: (props: SVGProps<SVGSVGElement>) => JSX.Element;

  export default SVGComponent;
}

declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
