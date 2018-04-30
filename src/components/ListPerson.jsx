import React, {Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { findPerson } from '../actions/PersonaActions'

class ListPerson extends Component{

    constructor(props) {
        super(props);
        //this.personas = [];
    }

	render(){
        console.log('this.props');
        console.log(this.props);
        this.props.findPerson();
        //this.props.personas = this.props.store.persona.personas || [];
        let personas = this.props.state.persona.personas || [];
		return (
            <div>
                <h1>Lista de personas</h1>
            {personas.valueSeq().map(person => {return <div key={person.id} >{person.nombre}</div>})} 
            </div>
        );
	}
}

/*
ListPerson.propTypes = {
  personas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired
  }).isRequired)
};*/

const mapStateToProps = state => {
    console.log('store');
    console.log(state);
  return {
    state
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