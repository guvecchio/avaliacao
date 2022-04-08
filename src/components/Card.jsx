
import React from 'react'
import './Card.css'

function getColor(props){
    if(props.red1) return "Red1"
    if(props.red2) return "Red2"
    if(props.red3) return "Red3"
    if(props.red4) return "Red4"
    if(props.red5) return "Red5"
    return ""
}

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">
                    {props.title}
                </span>
            </div>

            <div className="Header">
                <span className="Content">
                    {props.children}
                </span>
            </div>
        </div>
    )
}