import React from "react";


function useLocalStorage(itemName,initialValue){
  
    const [data,setData]=React.useState(initialValue) 
    const [loading,setLoading]=React.useState(true)
    const [error,setError]=React.useState(false)
   
  
    
    React.useEffect(()=>{
      
      setTimeout(()=>{
        
        try{
          const localStorageItem=localStorage.getItem(itemName)
          //debugger
          let value
          if(localStorageItem){
            
            value=JSON.parse(localStorageItem)
            //console.log(todos)
          }else{
            localStorage.setItem(itemName,JSON.stringify(initialValue)) 
            value=initialValue
          } 
          console.log(data)
          //debugger
          
            setData(value)
            setLoading(false)
        }catch(error){
          setError(error)
        }
        
      },2000)
    })
    
  
  
  
  
  const saveItem=(newData)=>{
    try{
      let toJson=JSON.stringify(newData)
      localStorage.setItem(itemName,toJson)
      setData(newData)
    }catch(error){
      setError(error)
    }
  
  }
    
    
    return {
      data,
      saveItem,
      loading,
      error}
  }


  export {useLocalStorage}