import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export const Article = () => {
    return (
        <div>
            Article
        </div>
    )
}

Article.propTypes = {
    prop: PropTypes
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
