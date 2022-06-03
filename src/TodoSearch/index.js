import React from "react";
import './todoSearch.css'

function TodoSearch({search,setSearch}){
    return (
        <React.Fragment>
            <div className="todoSearch">
                <input placeholder="Cebolla" onChange={(event)=>{
                    setSearch(event.target.value)
                    
                }} />
            </div>
        </React.Fragment>
    )
}

export {TodoSearch}