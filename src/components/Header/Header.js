import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import AddUserForm from '../AddUserForm';
import {USER_ARTICLES} from '../../scenes/constants';
import './header.css';

export const Header = ({users, history}) => {
    const goToUser = (id) => history.push(
        USER_ARTICLES.replace(':userId?', id)
    )

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

const mapDispatchToProps = {
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
