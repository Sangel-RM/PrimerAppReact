import React from "react";
import { CompleteIcon } from "../completeIcon";
import { DeleteIcon } from "../deleteIcon";
import "./TodoItem.css"
function TodoItem(props){
    return (
      <li> 
        <CompleteIcon 
        onComplete={props.onComplete}
        completed={props.completed}
        />
        <p className={`Todo-item ${props.completed && "TodoItem-p--complete"}`}>
          {props.tag}
        </p>
      <DeleteIcon 
      onDelete={props.onDelete}
      completed={props.completed}
      />
      </li>
    );
}
export {
    TodoItem
}