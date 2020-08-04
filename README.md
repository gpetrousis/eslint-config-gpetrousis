# eslint-config-gpetrousis
![GitHub package.json version](https://img.shields.io/github/package-json/v/gpetrousis/foodjammingui.svg)
![GitHub issues](https://img.shields.io/github/issues-raw/gpetrousis/foodjammingui.svg)
![GitHub](https://img.shields.io/github/license/gpetrousis/foodjammingui.svg)

A module that provide my personal .eslintrc configuration and rules as an extensible config.

## Installation
### Authenticate to GitHub Pacages
Before installing, make sure to authenticate with GitHub Package Registry or using a .npmrc file. See "[Configuring npm for use with GitHub Package Registry.](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry#authenticating-to-github-package-registry)"

### Point `npm install` to the GitHub npm registry.
Create or edit a local .npmrc in the same directory as the project to include the following line:
```
registry=https://npm.pkg.github.com/gpetrousis
```

### Install the package
```
$ npm install -D @gpetrousis/eslint-config-gpetrousis
```

### Without a local .npmrc
If you don't want to edit the .npmrc you can install the pacakage using
```
$ npm install -D --registry=https://npm.pkg.github.com/gpetrousis @gpetrousis/eslint-config-gpetrousis
```

## Usage
Create or edit an eslint config file (eg: .eslintrc) to include:
```
"extends": ["@gpetrousis/eslint-config-gpetrousis"]
```

## Deploy
```
$ npm version major|minor|patch|prerelease
```

```
$ npm publish
```

## TODOs
- Add style guide
- Add more rules
- Add tests