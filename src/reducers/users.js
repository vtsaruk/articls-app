import {ADD_USER, GET_USER_LIST} from '../actions/constants';

export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_USER: {
            return [...state, action.user];
        }
        case GET_USER_LIST:{
            const users = Object.assign(action.users, state);
            return users;
        }
        default:
            return state;
    }
}