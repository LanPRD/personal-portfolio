import NextConfig from "@prdev-solutions/eslint-config/next.mjs";

export default [
  ...NextConfig,
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
  }
];
