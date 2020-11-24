import {
    ADD_USER, 
    TOGGLE_CURRENT_USER,
    GET_CURRENT_USER,
    ADD_ARTICLE,
    DELETE_ARTICLE, 
    GET_USER_LIST,
    GET_ARTICLE_LIST,
} from './constants';

import {getLocalData, setLoalData} from '../utils/common';

export const addUser = ({name}) => (dispatch, select) => {
    const store = select();
    const id = Math.floor(Math.random() * Math.floor(10000));
    const newUser = {name, id};
    setLoalData('userList', [...store.users, newUser]);
    dispatch({type: ADD_USER, payload: newUser});
}

export const toggleUser = (id) => (dispatch, select) => {
    const {users} = select();
    const currentUser = users.find(user => user.id === id);
    setLoalData('currentUser', currentUser);
    dispatch({type: TOGGLE_CURRENT_USER, payload: {currentUser}});
}

export const getCurrentUser = () => dispatch => {
    const user = getLocalData('currentUser') || {};
    dispatch({type: GET_CURRENT_USER, payload: {user}});
}  

export const getUserList = () => dispatch => {
    const users = getLocalData('userList') || [];
    dispatch({type: GET_USER_LIST, payload: {users}});
}

export const addArticle = ({title, text}) => (dispatch, select) => {
    const id = Math.floor(Math.random() * Math.floor(10000));
    const store = select();
    const newArticle = {title, text, id, userId: store.currentUser.id}
    setLoalData('articleList', [...store.articles, newArticle]);
    dispatch({type: ADD_ARTICLE, payload: newArticle});
}

export const daleteArticle = (id) => dispatch => {
    dispatch ({type: DELETE_ARTICLE, payload: {id}});
}

export const getArticles = ({userId}) => (dispatch, select) => {
    const articles = getLocalData('articleList', ) || [];;
    dispatch({type: GET_ARTICLE_LIST, payload:{articles}});
}
