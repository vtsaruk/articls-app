import { combineReducers } from 'redux';
import { usersReducer} from './users';
import { currentUserReducer } from './currentUser';
import {articlesReducer} from './articles';

export const rootReducer = combineReducers({
    users: usersReducer,
    currentUser: currentUserReducer,
    articles: articlesReducer,
});