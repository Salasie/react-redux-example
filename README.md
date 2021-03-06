## Crear carpeta e ingresar en ella

    mkdir react-redux
	cd react-redux

## Iniciar proyecto (creacion package.json)

    yarn init

## Crear README.md

	touch README.md

## Crear .gitignore

	touch .gitignore

El cual tendra la siguiente información:

    node_modules
    dist

 - node_modules: para ignorar la carpeta "node_modules" que tiene las dependencias del proyecto
 - dist: para ignorar el lugar donde dejaremos el bundle de webpack

## Crear carpeta src donde tendremos las fuentes

    mkdir src

## Añadir librerias webpack al package.json

    yarn add -D webpack
    yarn add -D webpack-cli


## Añadir archivo de configuracion webpack.config.js


    'use strict';
    const path = require('path');

    // Path build
    var PATH_BUILD = path.resolve(__dirname, 'dist');

    // Path src
    var PATH_SRC = path.resolve(__dirname, 'src');

    var config = {
    	mode: 'development',
    	entry: [
		    './src/webpack-public-path',
    	    PATH_SRC + '/index.jsx'
            ],
	        output: {
    	    path: PATH_BUILD,
		    filename:'bundle.js'
	        },
	        module: {
    	    rules: [
			    {
   	    		test: /\.(js|jsx)$/,
   				include: PATH_SRC,
    		    use: 'babel-loader',
			    exclude: /node_modules/
			    }
		    ]
    	}
    };

    module.exports = config;


## Instalar servidor web para webpack (desarrollo)


	yarn add -D webpack-dev-server
	yarn add -D http-server

## Copiar la siguiente linea en script del package.json

    "start": "webpack-dev-server --inline --content-base ./src"

11- Añadir index.jsx en la carpeta "src" con la siguiente info:

console.log('Hola mundo react');

12- Añadir index.html en la carpeta src con la siguiente info:
--------------------------------
<html>
  <head>
    <meta charset="utf-8">
    <title>React Hola Mundo</title>
  </head>
  <body>
    <div id="app" />
    <script src="bundle.js" type="text/javascript"></script>
  </body>
</html>
--------------------------------

13- Probar con "npm start"

En la consola deberia aparecer un mensaje "Hola Mundo React"

14- A estas Altura tenemos webpack "basico" instalado, aora debemos instalar babel para que acepte ES6 y React JSX

15- Instalar babel

npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev

donde:

babel-core babel-loader  -> core de babel
babel-preset-es2015      -> soporte ES6
babel-preset-react       -> soporte JSX react

Todos como dependencia de desarrollo (--save-dev)

16- Crear archivo de configuracion babel (en la raiz del proyeto, .babelrc)

----------------------------------------------
{
  "presets": [
    "es2015",
    "react"
  ]
}
----------------------------------------------

17- Actualizar archivo de configuración de webpack para que use babel

quedaria de la siguiente manera:

----------------------------------------------
'use strict';

const path = require('path');

// Path build
var PATH_BUILD = path.resolve(__dirname, 'dist');

// Path src
var PATH_SRC = path.resolve(__dirname, 'src');

var config = {
	entry: [
		'./src/webpack-public-path',
    	PATH_SRC + '/index.jsx'
	],
	output: {
		path: PATH_BUILD,
		filename:'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				include: PATH_SRC,
				loader: 'babel',
				exclude: /node_modules/
			}
		]

	}
};

module.exports = config;
----------------------------------------------

18- Instalar react

npm i react react-dom --save  (como dependencia, vean que no es solo para desarrollo)


19- Instalar react-router (npm i react-router --save)



20- En este punto ya tengo configurado webpack para que genere el bundle (y evitarme usar grunt o gulp), el servidor http de desarrollo (con webpack), babel para que todo lo que venga en ES6 sea traducido a es5 (y poder usar ES6 libremente), y tambien instalado react y react-router, vamos a crear una carpeta dentro de src llamada components para crear 2 componentes que vamos a poder routear luego.

21- Login (Login.jsx dentro de component)

-----------------------------------------
import React, {Component} from 'react';
class Login extends Component{
	render(){
		return (<div>Login</div>);
	}
}
export default Login;
-----------------------------------------

22- Main

-----------------------------------------
import React, {Component} from 'react';
class Main extends Component{
	render(){
		return (<div>Main</div>);
	}
}
export default Main;
-----------------------------------------

23- Modifico index.jsx

import React, { Component } from 'react'; // Importo react y component(del cual heredan los componentes de react)
import { render } from 'react-dom'; // para realizar el render

import Login from './components/Login.jsx'; // componente Login
import Main from './components/Main.jsx'; // componente Main

import { Router, Route, IndexRoute, hashHistory } from 'react-router'; // Librerias de react-router

class App extends Component{
	render(){
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Login} />
				<Route path='/main' component={Main} />
			</Router>
		);
	}
}

render( <App />, document.getElementById('app'));


24- En este momento tengo la app que utiliza react-router, la raiz "/" va hacia login, y Main "/main" va hacia el componente main

25- Creare las carpetas de redux, actions, reducers bajo src

