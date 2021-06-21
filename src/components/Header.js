import React from 'react'
import '../App.css'

const Header = props => {
    const renderButton = buttonList => {
        const buttonElementList = []
        buttonList.forEach((screen, i) => {
            buttonElementList.push(<div key={i} onClick={()=>{props.toggleHandler(i)}}>
                <div >{screen}</div>
                <div ></div>
            </div>)
        })
        return buttonElementList
    }
    return <div className="d-flex jc-aro"><div style={{width: props.width ? props.width : "100%"}} className="d-flex ff-row jc-aro ai-cen">{props.array ? renderButton(props.array) : props.error}</div></div>
}

export default Header