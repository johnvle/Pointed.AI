module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "project": "./tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": [
        ".eslintrc.js", // Exclude the ESLint configuration file
        "webpack.config.js"
      ],
    "rules": {
    }
}
