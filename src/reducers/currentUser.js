import {TOGGLE_CURRENT_USER, GET_CURRENT_USER} from '../actions/constants';

export const currentUserReducer = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_CURRENT_USER: {
            return {...state, ...action.user};
        }
        case GET_CURRENT_USER:{
            return {...state, ...action.user};
        }
        default:
            return state;
    }
}