import React from "react";
import './todoCounter.css'

const estilos={
    color:"red",
    backGround:"yellow"
}

function TodoCounter ({count, total}){
    return (
        <React.Fragment>
            <div className="todoCounter">
                <h2 style={estilos}>Has completado {count} de {total} TODOs!</h2>
            </div>
        </React.Fragment>
    )
}

export {TodoCounter}