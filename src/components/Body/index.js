import React, { useContext } from 'react'
import SubHeader from '../Header'

const Body = props => {
    return <div>
        <SubHeader width={props.headerWidth} toggleHandler={props.headerToggleHandler} array={props.headerArray} error={props.headerError}></SubHeader>
        {props.text}
    </div>
}

export default Body