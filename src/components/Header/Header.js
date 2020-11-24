import React from 'react'
import { connect } from 'react-redux'

export const Header = (users) => {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    users: state.users,
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
