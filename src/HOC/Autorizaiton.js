import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {getCurrentUser} from '../actions';


const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: ()=> dispatch(getCurrentUser()),
    }
}

const AuthenticatedContainer = connect(null, mapDispatchToProps)(
    ({loadUser, children}) => {

        useEffect(()=>{
            loadUser();
        }, [])
        return <div className="container-app">{children}</div>
    }
)

export const Autorization = (Component) => props => {
    return <AuthenticatedContainer >
        <Component {...props} />
    </AuthenticatedContainer>
}