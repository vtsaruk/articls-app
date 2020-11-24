import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import AddUserForm from '../AddUserForm';
import {USER_ARTICLES} from '../../scenes/constants';
import {getUserList, toggleUser} from '../../actions';
import './header.css';

export const Header = ({users, history, loadUsers, toggleUser}) => {
    useEffect(() => {
        loadUsers()
    }, []);

    const goToUser = (id) => {
        history.push(USER_ARTICLES.replace(':userId?', id));
        toggleUser(id);
    }
    return (

        <div className="app-menu">
           <AddUserForm />
           <ul className="user-list">
                {users.map(({id, name}) => (
                    <li key={id} onClick={()=> goToUser(id)}>
                       {name}
                    </li>
                ))}
           </ul>
        </div>
    )
}

AddUserForm.propTypes = {
    users: PropTypes.array,
}

const mapStateToProps = (state) => ({
    users: state.users,
})

const mapDispatchToProps = dispatch => {
    return {
        loadUsers: () => dispatch(getUserList()),
        toggleUser: (userId) => dispatch(toggleUser(userId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
