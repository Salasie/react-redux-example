//import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import persona from './persona'
import pagina from './pagina'

export default combineReducers({
//  routing,
  persona,
  pagina
})