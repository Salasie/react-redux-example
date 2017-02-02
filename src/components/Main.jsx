import React, {Component} from 'react';
import {Link} from 'react-router';

import AddPerson from './AddPerson.jsx';
import ListPerson from './ListPerson.jsx';

class Main extends Component{
	render(){
		return (
			<div>
			<h1>Main</h1>
			<ul role="nav">
				<li><Link to="/main/person">Person</Link></li>
				<li><Link to="/main/list">List</Link></li>
			</ul>


			<AddPerson/>

			{this.props.children}
			</div>
			);
	}
}

export default Main;