import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import AddArticleForm from '../components/AddArticleForm';
import {getArticles} from '../actions';

const UserArticles = ({ articles, loadArticles }) => {
    useEffect(() => {
        loadArticles(5);
    }, []);
    const renderArticle = ({id, title, text }) => (
        <li key={id}>
            <h6>
                {title}
            </h6>
            <p>{text}</p>
        </li>
    )
    
    return (
        <div className="article-page">
            <AddArticleForm />
            {articles.map(renderArticle)}
        </div>
    )
}

UserArticles.propTypes = {
    articles: PropTypes.array,
}

const mapStateToProps = (state) => ({
    articles: state.articles,
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadArticles: (userId) => dispatch(getArticles(userId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserArticles));
