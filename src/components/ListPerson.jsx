import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { findPerson } from '../actions/PersonaActions'

class ListPerson extends Component{

    constructor(props) {
        super(props);
    }

	render(){
		return (
            <div>
                Lista
                {this.props.personas.map(person => {return <div key={person.id} >{person.nombre} {person.apellido}</div>})}   
            </div>
        );

	}
}

const mapStateToProps = state => {
  return {
    personas:state.persona.personas
  }
}

const mapDispatchToProps = dispatch => {
    return {
        findPerson: () => dispatch(findPerson())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPerson);