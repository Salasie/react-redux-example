import * as types from '../constants/ActionsTypes';
//import { Map as map } from 'immutable';

let idPersona = 1;


const personaStoreDefault = {
  persona:{},
  personas:[]
}

const persona = (state = personaStoreDefault, action) => {
  console.log("REDUCER PERSONA")
  console.log(action)
  switch (action.type) {
    case types.ADD_PERSON:

      let personaNew = {
        id:idPersona++,
        nombre:action.person.nombre,
        apellido:action.person.apellido
      }

      var personasNew = state.personas.concat([personaNew]);

      console.log("personas")
      console.log(state)
      console.log("personas")

      /*
      return {
        ...state,
        persona:personaNew,
        personas:personasNew
      }
      */
      
      console.log("XXXX")
      console.log(Object.assign({},state, {
        persona: personaNew,
        personas:personasNew
      }) )
      console.log("XXXX")

      return Object.assign({},state, {
        persona: personaNew,
        personas:personasNew
      }) 

    case types.FIND_PERSON:
      let personasFind = state.personas
      return Object.assign(state, {
        personas:personasFind
      })       
    default:
      return state
  }
}


export default persona