// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  name: 'project/stylistic-rules',
  files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
  rules: {
    '@stylistic/array-bracket-spacing': ['error', 'never'],
    '@stylistic/block-spacing': ['error', 'always'],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/indent': ['error', 2],
    '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
    '@stylistic/quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: 'always' }
    ],
    '@stylistic/semi': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 'off'
  }
})
