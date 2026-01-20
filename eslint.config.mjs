import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import NextConfig from "@prdev-solutions/eslint-config/next.mjs";

export default [
  ...next,
  ...nextCoreWebVitals,
  ...nextTypescript,
  ...NextConfig,
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
  }
];
