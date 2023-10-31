import React from 'react';
import { TodoCounter } from '../component/TodoCounter';
import { TodoSearch } from '../component/TodoSearch';
import { TodoList } from '../component/TodoList';
import { TodoItem } from '../component/TodoItems';
import { TodosLoading } from '../component/TodosLoading';
import { TodosError } from '../component/TodosError';
import { EmptyTodos } from '../component/EmptyTodos';
import { CreateTodoButton } from '../component/CreateTodoButton';
import { DivApp } from '../component/divApp';
import { Modal } from '../component/Modal';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../component/TodoForm';

function AppUI() {
  const {
    totalTodos,
    searchTodos,
    completeTodo,
    deletedTodo,
    loading,
    error,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
    return (
        <>
          <DivApp>
            <TodoCounter />
              <TodoSearch typeSearch={"Buscar una tarea"}/>
                    <TodoList>
                    {loading && <TodosLoading/>}
                    {error && <TodosError/>}
                    {(!loading && totalTodos === 0) && <EmptyTodos/>}
                      {searchTodos.map(item => 
                      <TodoItem  
                      onComplete={() => completeTodo(item.text)}
                      onDelete={() => deletedTodo(item.text)}
                      key={item.text} 
                      completed={item.completed} 
                      tag={item.text}/>
                      )}
                  </TodoList>
              <CreateTodoButton/>
              {openModal && <Modal>
                              <TodoForm Text_input={"Tarea a completar"} />
                            </Modal>}
          </DivApp>
        </>
      );
}
export { AppUI };