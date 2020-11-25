import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {getCurrentUser, loadAllArticlesFromLoacalstore, startLoader} from '../actions';


const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: ()=> dispatch(getCurrentUser()),
        loadArticles: () => dispatch(loadAllArticlesFromLoacalstore()),
        startLoader: () => dispatch(startLoader()),
    }
}

const AuthenticatedContainer = connect(null, mapDispatchToProps)(
    ({loadUser, children, loadArticles, startLoader}) => {

        useEffect(()=>{
            startLoader();
            loadUser();
            loadArticles();
        }, [])
        return <div className="container-app">{children}</div>
    }
)

export const Autorization = (Component) => props => {
    return <AuthenticatedContainer >
        <Component {...props} />
    </AuthenticatedContainer>
}