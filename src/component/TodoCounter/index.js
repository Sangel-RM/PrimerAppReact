import React, { useContext } from 'react'
import { TodoContext } from '../../TodoContext'
import './stilos-counter.css'

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
    loading
  } = React.useContext(TodoContext)
    return (
      <h1>
        {
        loading && "cargando..."  
        ||
        totalTodos > completedTodos && `Has completado ${completedTodos} de ${totalTodos} TODOS` 
        ||
        totalTodos === completedTodos && totalTodos > 0 && `Felicitaciones Has completado todos los TODOS 🍷👌`
        || "Por favor Introducir nuevas tareas"
        }
      </h1>
    ) 
}
export {
    TodoCounter
}
