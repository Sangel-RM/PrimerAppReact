import React from "react";
import ReactDom, { createPortal } from "react-dom";

function Modal ({ children }){
    return createPortal(
        <div className="Modal">
            {children}
        </div>,
    document.getElementById("modal")
    )
}
export {
    Modal
}