module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-native-a11y/all",
    "plugin:testing-library/react",
    "@react-native",
    "universe/native",
    "prettier",
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    project: ["./.config/eslint/tsconfig.json"],
    sourceType: "module",
    tsconfigRootDir: __dirname,
  },
  rules: {
    "import/order": "off",
    "prettier/prettier": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "testing-library/prefer-user-event": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
