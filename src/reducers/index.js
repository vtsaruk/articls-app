import { combineReducers } from 'redux';
import { usersReducer} from './users';
import { currentUserReducer } from './currentUser';
import {articlesReducer} from './articles';
import {loaderReducer} from './loader';

export const rootReducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    articles: articlesReducer,
    isLoader: loaderReducer,
});