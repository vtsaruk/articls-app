import {ADD_ARTICLE, GET_ARTICLE_LIST, DELETE_ARTICLE} from '../actions/constants';

export const articlesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ARTICLE: {
            return [...state, action.user];
        }
        case GET_ARTICLE_LIST:{
            const users = Object.assign(action.users, state);
            return users;
        }
        case DELETE_ARTICLE: {
            const users = state.filter(user => user.id !== action.id);
            return users;
        } 
        default:
            return state;
    }
}