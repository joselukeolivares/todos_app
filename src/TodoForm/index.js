import React, { useContext } from "react";
import { todoContext } from "../todoContext";

function TodoForm(){

    const [newTodoValue,setNewTodoValue]=React.useState('')

    const {addTodo}=React.useContext(todoContext)

    function onCancel(){

    }
    
    function onSubmit(event){
        event.preventDefault()
        addTodo(newTodoValue)
    }

    function onTextChange(event){
        setNewTodoValue(event.target.value)
    }

    return (
        <React.Fragment>
            <form onSubmit={onSubmit} >
                <label>Todo:</label>
                <textarea 
                    placeholder="Cortar la cebolla"
                    value={newTodoValue}
                    onChange={onTextChange}
                    ></textarea>
                <div>
                    <button onClick={onCancel} type="button">
                        Cancelar
                    </button>
                    <button  type="submit">
                        
                        Añadir
                    </button>
                </div>
            </form>
        </React.Fragment>
    )
}

export {TodoForm}