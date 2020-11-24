import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import AddArticleForm from '../components/AddArticleForm';
import {getArticles} from '../actions';
import {ARTICLES_ID} from '../scenes/constants';
import {getUserById} from '../selectors';

const UserArticles = (props) => {
    const { articles, loadArticles, match, history, user } = props;
    useEffect(() => {
        loadArticles(Number(match.params.userId));
    }, [match]);

    const renderArticle = ({id, title, text }) => {
        const handleClick = () => {
            history.push(ARTICLES_ID.replace(':articleId?', id));
        }

        return (
            <li key={id} onClick={handleClick} className="article-cell">
                <h6>
                    {title}
                </h6>
                <p>{text}</p>
            </li>
            )
    }
    
    return (
        <div className="article-page">
            <h2>Article list for user {user.name}</h2>
            <AddArticleForm />
            <ul className="article-list">            
                {articles.map(renderArticle)}
            </ul>
        </div>
    )
}

UserArticles.propTypes = {
    articles: PropTypes.array,
}

const mapStateToProps = (state, {match}) => ({
    articles: state.articles,
    user: getUserById(state, match.params),
})


const mapDispatchToProps = (dispatch) => {
    return {
        loadArticles: (userId) => dispatch(getArticles(userId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserArticles));
