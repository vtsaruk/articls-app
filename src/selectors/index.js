import { createSelector } from 'reselect';

const getAllArticles = (state) => state.articles;
const getAllUsers = (state) => state.users || [];

export const getArticleById = createSelector(
    getAllArticles,
    (state, articleId) => Number(articleId),
    (list, id) =>  list.find(_ => _.id === id) || {}
);
export const getUserById = createSelector(
    getAllUsers,
    (state, {userId}) => Number(userId),
    (list, id) =>  list.find(_ => _.id === id) || {}
)

export const getUserByArticle = createSelector(
    getAllUsers,
    (state, {userId}) => Number(userId),
    (list, id) =>  list.find(_ => _.id === id) || {}
)