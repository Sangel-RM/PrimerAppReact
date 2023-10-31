import React from "react";
import { TodoIcon } from "../TodoIcon";
import { TodoContext } from "../../TodoContext";

function ClosedVentana ({onCancel, cerrarModal}){
    return (
        <TodoIcon 
        onClick={() => {
            onCancel();
            cerrarModal();
        }}
        type={"delete"}/>
        )  
}
export { ClosedVentana }