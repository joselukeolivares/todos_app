import React from "react";
import './todoItem.css'

function TodoItem(props){
    return (
        <React.Fragment>
            <li className="todo">
                <span className={props.complete?"completed":""} onClick={()=>{
                    props.turnComplete(props.text)
                }}>&#10004;</span>
                <p>{props.text}</p>
                <span className="delete" onClick={()=>{
                    props.delete(props.text)
                }}>X</span>
            </li>
        </React.Fragment>
    )
}

export {TodoItem}