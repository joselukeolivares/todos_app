import React from "react";
import {useLocalStorage} from './useLocalStorage'

const todoContext=React.createContext()

function TodoProvider(props){

const {data,saveItem:setTodos,loading,error}=useLocalStorage('todos_v1',[])
const [searched,setSearch]=React.useState("")
const [openModal,setOpenModal]=React.useState(false)

let list

if(searched.length>0){
 let  dataAux=data.filter(todo=>{
    //debugger
    let searchLower=searched.toLowerCase()
    let todoLower=(todo.text).toLowerCase()
    
    return todoLower.includes(searchLower)
  })

  list=dataAux
}else{
  list=data
}

let completedCount=data.filter(todo=>todo.complete)

const addTodo=(text)=>{
 
  let listTodos=[...list]
  listTodos.push({
    complete:false,
    text,
  })  
  setTodos(listTodos)
  
}

const completeTodo=(text)=>{
 
  let index=data.findIndex(todo=>todo.text===text)
  let cloneItems=[...data]
  
  cloneItems[index].complete=true
  setTodos(cloneItems)
  
}

function deleteTodo(text){

  let index=data.findIndex(todo=>todo.text===text)
  let cloneItems=[...data]
  cloneItems.splice(index,1)
  setTodos(cloneItems)
  
}

    return (
        <todoContext.Provider value={
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
                setOpenModal,
                openModal,
                addTodo

            }
        }>
            {props.children}
        </todoContext.Provider>
    )
}

export {todoContext,TodoProvider}