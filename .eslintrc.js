let options={
  "root": true,
  "parserOptions": {
      "parser": "babel-eslint"
  },
  "plugins": ["flowtype", "html", "vue"],
  "settings": {
      "html/html-extensions": [".html"]
  },
  "globals": {
      "axios": true,
      "elastic": true,
      "initNECaptcha": true,
      "$": true,
      "jQuery": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:vue/recommended"
  ],
  "rules": {
      "curly": ["error", "all"],
      "comma-dangle": ["error", "only-multiline"],
      "camelcase": ["error", {"properties": "never"}],
      "flowtype/define-flow-type": 1,
      "flowtype/use-flow-type": 1,
      "indent": ["warning",2, {"SwitchCase": 1}],
      "object-curly-spacing": ["error", "never"],
      "space-before-function-paren": ["error", "never"],
      "space-before-blocks": ["error", "always"],
      "space-infix-ops": ["error", {"int32Hint": false}],
      "no-alert": "error",
      "no-dupe-args": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-empty": "error",
      "no-console": "off",
      "vue/require-default-prop":"off",
      "vue/require-prop-types": 'off',
  },
  "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
      "es6": true
  }
}
module.exports = options