import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const UserArticles = () => {
    return (
        <div>
            
        </div>
    )
}

UserArticles.propTypes = {
    prop: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserArticles)
