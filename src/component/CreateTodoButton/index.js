import React from "react"
import { useContext } from "react"
import { TodoContext } from "../../TodoContext"
function CreateTodoButton () {
    const {
        setOpenModal,
        modalx100,
        openModal,
    } = React.useContext(TodoContext)
    return (
        <button 
        onClick={() => {
            modalx100()
            setOpenModal(!openModal)
        }}
        className="IntegrarNuevaTarea"
        >Agregar Tarea</button>
    )
}
export {
    CreateTodoButton
}
