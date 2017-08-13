# How to react:

## Preparing

* mkdir ‘app_name’

init npm with package.json:
* npm init -y

install react tools and wepback
* npm install —save react
* npm install —save react-dom 
* npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react react-hot-loader webpack webpack-dev-server
* npm install -global webpack webpack-dev-server
* npm install --save-dev react-hot-loader

additional libs: ui for my application, jquery, css loaders.
* npm install material-ui
* npm install jquery
* npm install style-loader css-loader --save

## Running
To build your final js script run:
* webpack

run
* webpack-dev-server
and visit localhost:8080