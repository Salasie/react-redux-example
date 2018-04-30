import React, {Component} from 'react';
//import {Link} from 'react-router';
//import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddPerson from './AddPerson.jsx';
import ListPerson from './ListPerson.jsx';
/*
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
*/

class Main extends Component{
	render(){
		return (
			<div>
			<h1>Main</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />


			<ul role="nav">

				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/topics" component={Topics} />


			</ul>
			
			{this.props.children}
			</div>
			);
	}
}


const Home = () => (
	<div>
	  <h2>Home</h2>
	</div>
  );
  
  const About = () => (
	<div>
	  <h2>About</h2>
	</div>
  );
  
  const Topics = ({ match }) => (
	<div>
	  <h2>Topics</h2>
	  <ul>
		<li>
		  <Link to={`${match.url}/rendering`}>Rendering with React</Link>
		</li>
		<li>
		  <Link to={`${match.url}/components`}>Components</Link>
		</li>
		<li>
		  <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
		</li>
	  </ul>
  
	  <Route path={`${match.url}/:topicId`} component={Topic} />
	  <Route
		exact
		path={match.url}
		render={() => <h3>Please select a topic.</h3>}
	  />
	</div>
  );
  
  const Topic = ({ match }) => (
	<div>
	  <h3>{match.params.topicId}</h3>
	</div>
  );
  


/*

				<Route path="/" exact component={AddPerson} />
				<Route path="/list" component={ListPerson} />

*/

export default Main;