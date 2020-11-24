import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addArticle} from './../../actions';
import './addUserForm.css';

export const AddArticleForm = ({addArticle}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const title = evt.target['title'].value.trim();
        const text = evt.target['text'].value.trim();
        addArticle({title, text});
        evt.target.reset();
    }
    return (
        <form onSubmit={handleSubmit} className="user-form">
            <input name="title" placeholder="Title" required />
            <textarea name="text" placeholder="Text" required />
            <button>Add article</button>
        </form>
    )
}

AddArticleForm.propTypes = {
    addArticle: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArticle: (data) => dispatch(addArticle(data)),
    }
}

export default connect(null, mapDispatchToProps)(AddArticleForm)
