module.exports = {
  printWidth: 150,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxSingleQuote: false,
  arrowParens: 'always',
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-tailwindcss'],
  pluginSearchDirs: false,

  // tw: opengraph image, image response
  tailwindAttributes: ['tw'],
  tailwindFunctions: ['clsx', 'twMerge'],
};
