import {ADD_USER, GET_USER_LIST} from '../actions/constants';

export const usersReducer = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_USER: {
            return [...state, payload];
        }
        case GET_USER_LIST:{
            const users = Object.assign(action.users, state);
            return users;
        }
        default:
            return state;
    }
}