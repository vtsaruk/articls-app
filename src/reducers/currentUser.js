import {TOGGLE_USER, GET_USER} from '../actions/constants';

export const currentUserReducer = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_USER: {
            return {...state, ...action.user};
        }
        case GET_USER:{
            return {...state, ...action.user};
        }
        default:
            return state;
    }
}