import * as types from '../constants/ActionsTypes';

const paginaStoreDefault = {
  colorHeader1:"",
  colorHeader2:"",
  colorHeader3:""
}

const pagina = (state = paginaStoreDefault, action) => {
  console.log("REDUCER PAGINA")
  switch (action.type) {
    case types.CHANGE_COLOR_1:
      return Object.assign(state, {
        colorHeader1: action.color
      }) 
    case types.CHANGE_COLOR_2:
      return Object.assign(state, {
        colorHeader2: action.color
      })     
    case types.CHANGE_COLOR_3:
      return Object.assign(state, {
        colorHeader3: action.color
      })           
    default:
      return state
  }
}


export default pagina