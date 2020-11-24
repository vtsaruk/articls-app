import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../actions';
import { withRouter } from "react-router";

export const AddUserForm = ({addUser}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const name = evt.target['userName'].value.trim();
        addUser({name});
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="userName" />
            <button>add user</button>
        </form>
    )
}

AddUserForm.propTypes = {
    addUser: PropTypes.func.isRequired,
}


const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (data) => dispatch(actions.addUser(data)),
    }
    
}

export default withRouter(connect(null, mapDispatchToProps)(AddUserForm))
