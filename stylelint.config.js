module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      customSyntax: "@stylelint/postcss-css-in-js",
    },
  ],

  plugins: ["stylelint-order"],
  rules: {
    "function-no-unknown": null,
    "value-keyword-case": null,
    "property-no-unknown": null,
    "annotation-no-unknown": null,
    "no-duplicate-selectors": null,
  },
};
