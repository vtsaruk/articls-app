import React from 'react'
import { connect } from 'react-redux'

export const Home = () => {
    return (
        <div>
            <h2>Home page</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
