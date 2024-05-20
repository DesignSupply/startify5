/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-html', 'stylelint-config-standard-scss'],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  overrides: [
    {
      files: ['*.{html,astro}', '**/*.{html,astro}'],
      customSyntax: 'postcss-html'
    }
  ],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }],
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind'] }]
  }
};
