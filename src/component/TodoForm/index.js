import React from "react";
import { TodoContext } from "../../TodoContext";
import { ClosedVentana } from "../ClosedVentana"
import { Modal } from "../Modal";


function TodoForm ({Text_input}){
    let {
        searchValueInput,
        setSearchValueInput,
        openModal,
        setOpenModal,
        newTarea,
        modalx100,
        toggleModal
    } = React.useContext(TodoContext);
    const onSubmit = (event) => {
        event.preventDefault();
        if(searchValueInput.trim().length > 0){
            newTarea({text:searchValueInput});
            toggleModal({modal: openModal, setOpenModal:setOpenModal});
            setSearchValueInput(searchValueInput = "");
            modalx100();
        }
    }
    const onCancel = () => {
        toggleModal({modal: openModal, setOpenModal:setOpenModal})
    }
    return (
        <form className="Form-newTarea" onSubmit={onSubmit}>
            <label for="input-text">Insertar nueva tarea</label>
            <input 
            type="Text" 
            id="input-text" 
            value={searchValueInput}
            placeholder={`${Text_input}`}
            onChange={(event) => {
                setSearchValueInput(event.target.value)
            }}
            />
            <button 
            type="submit"
            className="Guardar-Tarea"
            >Guardar Tarea</button>
            <ClosedVentana 
            onCancel={onCancel}
            cerrarModal={modalx100}
            />
        </form>
    )
}
export {TodoForm }