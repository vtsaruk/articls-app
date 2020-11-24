import {
    ADD_USER, 
    TOGGLE_CURRENT_USER,
    GET_CURRENT_USER,
    ADD_ARTICLE,
    DELETE_ARTICLE, 
    GET_USER_LIST,
    GET_ARTICLE_LIST,
} from './constants';

export const addUser = ({name}) => dispatch => {
    const id = Math.floor(Math.random() * Math.floor(10000));

    dispatch({type: ADD_USER, payload: {name, id}});
}

export const toggleUser = ({id}) => dispatch => {
    dispatch({type: TOGGLE_CURRENT_USER, id});
}

export const getCurrentUser = () => dispatch => {
    const user = {}
    dispatch({type: GET_CURRENT_USER, user});
}  

export const getUserList = () => dispatch => {
    const users = [];
    dispatch({type: GET_USER_LIST, users});
}

export const addArticle = ({title, text}) => dispatch => {
    const id = Math.floor(Math.random() * Math.floor(10000));
    dispatch({type: ADD_ARTICLE, payload: {title, text, id}});
}

export const daleteArticle = (id) => dispatch => {
    dispatch ({type: DELETE_ARTICLE, payload: {id}});
}

export const getArticles = ({userId}) => dispatch => {
    const articles = [];
    dispatch({type: GET_ARTICLE_LIST, articles});
}