import * as types from '../constants/ActionsTypes';
import { Map as map } from 'immutable';

let idPersona = 1;


const personaStoreDefault = {
  persona:{},
  personas:map()
}

const persona = (state = personaStoreDefault, action) => {
  switch (action.type) {
    case types.ADD_PERSON:

      let persona = {
        id:idPersona++,
        nombre:action.person.nombre,
        apellido:action.person.apellido
      }
      let personas = state.personas.set(persona.id.toString(),persona)

      console.log(personas);

      return Object.assign(state, {
        persona: persona,
        personas:personas
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