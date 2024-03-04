mkdir src build
cd src && touch index.html
npm init --y
npm i react react-dom
npm i -D typescript @types/react @types/react-dom
npx tsconfig.json
npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
touch .babelrc
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
npm i -D babel-loader
mkdir webpack && cd webpack && touch webpack.config.js
