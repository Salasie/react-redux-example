import * as types from '../constants/ActionsTypes';

export const addPerson = person => {
    return {
        type:types.ADD_PERSON,
        person
    }
}

export const findPerson = () => {
    return{
        type: types.FIND_PERSON
    }
}

export const findPersonById = id => {
    return{
        type: types.FIND_PERSON_BY_ID,
        id
    }
}

export const deletePerson = id => {
    return{
        type: types.DELETE_PERSON,
        id
    }
}