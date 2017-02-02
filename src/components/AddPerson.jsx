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
                    <button type='submit' >Add Person</button>
                </form>
            </div>
        );
	}
}

const mapDispatchToProps = dispatch => {
    return {
        addPerson: person => dispatch(addPerson(person))
    }
}

export default connect(null,mapDispatchToProps)(AddPerson);