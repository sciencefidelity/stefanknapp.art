module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-sass-guidelines",
  ],
  "plugins": ["stylelint-scss"],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "color-no-hex": true,
    "max-nesting-depth": 4,
    "rule-empty-line-before": ["always", { except: ["inside-block"] }],
    "selector-max-id": 1,
    "value-keyword-case": ["lower", { "ignoreProperties": ["/^\\$/"] }]
  },
}
