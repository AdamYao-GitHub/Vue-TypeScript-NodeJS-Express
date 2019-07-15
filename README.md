<h2 align="center">Vue + Type Script + NodeJS + webpack</h2>

## Introduction

Step by step buid the application with vue, typescript, nodeSJ, webpack, exoress, postgres

## Prerequisites

- Git (v2.2+)
- Node.js (v10.0+)
- NPM (v6.0+)
- TypeScript()
- Vue()
- Express()
- postgres()

## Initial Evironment

- Step 1: nodeJS init  
  Run command `npm init` 
  Automatically generate "package.json" // Generate the configure file of the application 
- Step 2: install vue  
  Run command `npm i -D --save --verbose vue vue-loader vue-template-compiler`  
  vue-loader: using in webpack for compile ".vue"  
  vue-tempalte-compiler: compile the template of the vue  
  Add options `"browser": { "vue": "vue/dist/vue.common.js" },` into "package.json" 
- Step 3: install typescript  
  Run command `npm i -D --save --verbose typescript ts-loader`  
  ts-loader: using in webpack for compile ".ts"  
  Generate "tsconfig.json"  
- Step 4: install webpack  
  Run command `npm i -D --save --verbose webpack webpack-cli webpack-dev-server babel-loader css-loader file-loader`  
  babel-loader: ES6 -> ES5;  
  webpack-dev-server: compile the code and run local dev environment;  
  css-loader: sass, scss -> css  
  file-loader: read/update file(json)  
  Add script for build and running dev environment.  
  `scripts:{"build": "webpack", "devServer": "webpack-dev-server --hot", "dev": "npm run devServer -- --watch"}` into "package.json"
