import React, {Component} from 'react';
import { connect } from 'react-redux'
import { addPerson, findPerson } from '../actions/PersonaActions'

class AddPerson extends Component{

    constructor(props) {
        super(props);
        this.nombre;
        this.apellido;
        this.addPersonEvent = this.addPersonEvent.bind(this);
    }


    addPersonEvent(event){
        console.log(this.props.state)
        console.log(this.state)
        event.preventDefault();
        this.props.addPerson({
            nombre:this.nombre.value,
            apellido:this.apellido.value
        });
    }

	render(){
		return (
            <div>
                <form onSubmit={this.addPersonEvent}>
                    <input type= 'text' ref={value=>this.nombre = value} />
                    <input type= 'text' ref={value=>this.apellido = value} />
                    <button type='submit' >Add</button>
                </form>
            </div>
        );
	}
}

const mapStateToProps = state => {
    console.log('AddPerson mapStateToProps');
    console.log(state);
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
    console.log('AddPerson mapDispatchToProps ');
    return {
        addPerson: person => dispatch(addPerson(person))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);