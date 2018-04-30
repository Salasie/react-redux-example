import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'


import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Login from './components/Login.jsx';
import Main from './components/Main.jsx';
import AddPerson from './components/AddPerson.jsx';
import ListPerson from './components/ListPerson.jsx';

import reducers from './reducers'

let store = createStore(reducers)

class App extends Component{
	render(){

		return (
			<Provider store={store}>
				<BrowserRouter>
					<Main></Main>
				</BrowserRouter>
			</Provider>
		);
	}
}


/*

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Login from './components/Login.jsx';
import Main from './components/Main.jsx';
import AddPerson from './components/AddPerson.jsx';
import ListPerson from './components/ListPerson.jsx';

import reducers from './reducers'

let store = createStore(reducers)

class App extends Component{
	render(){
		return (
			<Provider store={store}>
				<Router history={hashHistory}>
					<Route path='/' component={Login} />
					<Route path='/main' component={Main} >
						<Route path='person' component={AddPerson} />
						<Route path='list' component={ListPerson} />
					</Route>
				</Router>
			</Provider>
		);
	}
}

*/

render( <App />, document.getElementById('app'));




