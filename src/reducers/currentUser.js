import {TOGGLE_CURRENT_USER, GET_CURRENT_USER} from '../actions/constants';

export const currentUserReducer = (state = {}, action) => {
    const {type, payload} = action;
    switch (type) {
        case TOGGLE_CURRENT_USER: {
            return {...state, ...payload.currentUser};
        }
        case GET_CURRENT_USER:{
            return {...state, ...payload.currentUser};
        }
        default:
            return state;
    }
}