import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const AddUserForm = () => {
    const handleSubmit = () => {}
    return (
        <form onSubmit={handleSubmit}>
            <input name="userName" />
            <button>addUser</button>
        </form>
    )
}

AddUserForm.propTypes = {
    prop: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm)
