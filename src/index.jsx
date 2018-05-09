import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'


import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'


import Main from './components/Main.jsx';
import AddPerson from './components/AddPerson.jsx';
import ListPerson from './components/ListPerson.jsx';

import logger from 'redux-logger'

import reducers from './reducers'

let store = createStore(reducers, applyMiddleware(logger))

class App extends Component{
	render(){

		return (
			<Provider store={store}>
				<Main></Main>
			</Provider>
		);
	}
}

render( <App />, document.getElementById('app'));
