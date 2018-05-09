import * as types from '../constants/ActionsTypes';


let idPersona = 1;


const personaStoreDefault = {
  persona:{},
  personas:[]
}

const persona = (state = personaStoreDefault, action) => {
  switch (action.type) {
    case types.ADD_PERSON:

      let personaNew = {
        id:idPersona++,
        nombre:action.person.nombre,
        apellido:action.person.apellido
      }

      var personasNew = state.personas.concat([personaNew]);

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