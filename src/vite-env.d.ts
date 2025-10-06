/// <reference types="vite/client" />

declare module "*.svg?react" {
  import React from "react";
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
