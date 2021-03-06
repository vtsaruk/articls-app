import {ADD_ARTICLE, GET_ARTICLE_LIST, DELETE_ARTICLE} from '../actions/constants';

export const articlesReducer = (state = [], action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_ARTICLE: {
            return [...state, payload.article];
        }
        case GET_ARTICLE_LIST:{
            return [...state.slice(0, 0), ...payload.articles];
        }
        case DELETE_ARTICLE: {
            const users = state.filter(article => article.id !== payload.id);
            return users;
        } 
        default:
            return state;
    }
}