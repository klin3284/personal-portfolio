const { format } = require("path");

module.exports = {
  plugins: ["prettier", "import", "react"],
  root: true,
  extends: [
    "airbnb-base",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:@next/next/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false,
  },
  ignorePatterns: ["/*.*"],
  rules: {
    "@next/next/no-img-element": "off",
    "prettier/prettier": "error",
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-restricted-syntax": 0,
    "no-plusplus": 0,
    "class-methods-use-this": 0,
    "@typescript-eslint/no-unused-vars": [1, { args: "none" }],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.ts", "**/TestUtils.ts"] },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        types: ["function"],
        format: ["PascalCase", "camelCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "variable",
        modifiers: ["global", "const"],
        types: ["boolean", "number", "string", "array"],
        format: ["UPPER_CASE"],
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
    ],
  },
  overrides: [
    {
      files: ["app/api/**/*.{js,ts}"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
  ],
};
