import { SanityCodegenConfig } from "sanity-codegen"

const config: SanityCodegenConfig = {
  schemaPath: "./schemas/schema.ts",
  outputPath: "../nuxt2/generated/schemaTypes.ts"

  // NOTE: The CLI ships with a pre-configured babel config that shims out
  // the Sanity parts system. This babel config does not read from any
  // `.babelrc` or `babel.config.js`. You can only configure extra babel
  // options here.
  // babelOptions: require('./.babelrc.json'), // (optional)
}

export default config
