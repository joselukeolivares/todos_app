import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import {TodoItem} from "../TodoItem"
import { CreateTodo } from '../CreateTodo';
import  {todoContext} from '../todoContext'
import {Modal} from '../Modal'
import {TodoForm} from '../TodoForm'

function AppUi(){

  const 
  {
    searched,
    setSearch,
    data,
    list,
    completeTodo,
    deleteTodo,
    completedCount,
    loading,
    error,
    openModal,
    setOpenModal
}=React.useContext(todoContext)
    return(       

            <todoContext.Consumer>
              {({
                loading,
                error,
                searched,
                completeTodo,
                deleteTodo
              })=>{
                return (
                 <React.Fragment>
                  <div className='container'>
                  <TodoCounter/>
            
                  <TodoSearch/>
                    <TodoList>
                  {error && <p>Ocurrio un error...</p>}
                  {loading && <p>Estamos cargando...</p>}
                  {(!loading && !searched.length) && <p>Crea un primer TODO</p>}
                  {list.map((todo,i)=>{
                    return (
                      <TodoItem complete={todo.complete} text={todo.text} key={`todoItem${i}`} turnComplete={completeTodo} delete={deleteTodo}/>
                    )
                  })}
                </TodoList>
                  {openModal && (                <Modal>
                   
                  <TodoForm/> 
                </Modal>)}
                <CreateTodo setOpenModal={setOpenModal}></CreateTodo>
                </div>
                 </React.Fragment>


                )
              }} 

            
                
         
            </todoContext.Consumer>
        
      
    )
}

export {AppUi}