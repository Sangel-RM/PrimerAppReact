import React from "react";
import { useLocalStorage } from "../customHook/useLocalStorage";

const TodoContext = React.createContext();
function TodoProvider({children}) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
     } = useLocalStorage("TODOS_V1", []);
 const completedTodos = todos.filter(item => item.completed == true).length;

 const totalTodos = todos.length;
 const [searchValue, setSearchValue] = React.useState("");
 const [openModal, setOpenModal] = React.useState(false);
 const [searchValueInput, setSearchValueInput] = React.useState("");

 const searchTodos = todos.filter((todos) => 
 todos.text.toLowerCase().includes(searchValue.toLowerCase()));
 const toggleModal = ({modal,setOpenModal}) =>{
  setOpenModal(!modal);
 }
 const $Element = ({element, id_class}) => {
  if(id_class == "id"){
    return document.querySelector(`#${element}`)
  }else if(id_class == "class"){
    return document.querySelector(`.${element}`)
  }
 }
 const completeTodo = (text) => {
   const newTodos = [...todos];
   const todoIndex = newTodos.findIndex((todo) => todo.text == text);
   if(newTodos[todoIndex].completed === true) {
     newTodos[todoIndex].completed = false;
   } else {
     newTodos[todoIndex].completed = true
   }
   saveTodos(newTodos);
 }
 const deletedTodo = (text) => {
   const newTodos = [...todos];
   const todoIndex = newTodos.findIndex((todo) => todo.text === text);
   newTodos.splice(todoIndex, 1);
   saveTodos(newTodos);
 }
 const newTarea = ({text, completed = false}) => {
   const newTodos = [...todos]; 
   if(text.trim().length == 0){
     alert("Tienes que rellenar el campo amigo y no puedes solo poner espacions vacios")
   }else{
     newTodos.push({
       text: text.trim(),
       completed
     })
     saveTodos(newTodos);
     
   }
 }
 const modalx100 = () =>{
  const modalPadre = $Element({element: "modal", id_class: "id"});
  modalPadre.classList.toggle("activeModal")
 }
 return (
    <TodoContext.Provider value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchTodos,
        completeTodo,
        deletedTodo,
        newTarea,
        loading,
        error,
        openModal,
        setOpenModal,
        searchValueInput,
        setSearchValueInput,
        modalx100,
        toggleModal,
    }}>
        {children}
    </TodoContext.Provider>
 )
}
export {
    TodoContext,
    TodoProvider
}