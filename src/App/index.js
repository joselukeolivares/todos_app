
import './App.css';
import React from "react";
import { AppUi } from './AppUi';
import {TodoProvider} from '../todoContext'


let todos=[
  {text:'cortar cebolla',complete:true},
  {text:'tomar curso de introduccion a react',complete:false},
  {text:'llorar con la llorona',complete:false}

]



function App() {


/*
console.log('Antes de use effect')
React.useEffect(()=>{
  console.log('use effect')
},[data])
console.log('Despues de use effect')
*/

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;
