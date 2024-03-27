// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs
import 'prettier-plugin-tailwindcss'
/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js',
}

export default config
