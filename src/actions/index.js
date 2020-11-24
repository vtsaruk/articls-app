import {
    ADD_USER, 
    TOGGLE_USER,
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
    dispatch({type: TOGGLE_USER, id});
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