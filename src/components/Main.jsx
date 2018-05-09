import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddPerson from './AddPerson.jsx';
import ListPerson from './ListPerson.jsx';


class Main extends Component{
	render(){
		return (
			<div>
				Main
				<AddPerson/>
				<ListPerson/>
			</div>
		);
	}
}

export default Main;