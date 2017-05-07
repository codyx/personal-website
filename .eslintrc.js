module.exports = {
  "parser": "babel-eslint",
  "extends": ["google", "eslint:recommended", "plugin:react/recommended"],
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "no-undef": "off"
  }
};
