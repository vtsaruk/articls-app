import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import {getArticleById, getUserByArticle} from '../selectors';


export const Article = ({article, user}) => {
    return (
        <div>
            <h2>Article page</h2>
            <h1>{article.title}</h1>
            <p>{article.text}</p>
            <p>user name: {user.name}</p>
        </div>
    )
}

Article.propTypes = {
    article: PropTypes.object.isRequired,
}

const mapStateToProps = (state, {match}) => {
    const article = getArticleById(state, match.params.articleId);
    return{
    article,
    user: getUserByArticle(state, article),
}}

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Article));
