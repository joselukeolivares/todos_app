import React from "react";
import './createTodo.css'

function CreateTodo(props){

    function onCreateTodo(){
        props.setOpenModal(prevState=>!prevState)
        //debugger
        //alert("clicked")
    }
    return (
        <React.Fragment>
            <div className="createContainer">
                <button onClick={onCreateTodo} className="createBtn">&#x2b;</button>
            </div>
        </React.Fragment>
    )
}

export {CreateTodo}