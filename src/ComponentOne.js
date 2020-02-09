import React from 'react'
import { withRouter } from 'react-router-dom'

const ComponentOne = (props) => {
    console.log(props.location.pathname)
    return <h1>I am component 1</h1>
}


export default withRouter(ComponentOne)