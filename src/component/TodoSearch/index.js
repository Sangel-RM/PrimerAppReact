import React from "react";
import { TodoContext } from "../../TodoContext";
function TodoSearch({typeSearch}) {
    const {
        searchValue,
        setSearchValue,
      } = React.useContext(TodoContext)
    return (
      <input 
      placeholder={typeSearch}
      className="InsertarTarea" 
      value={searchValue}
      onChange={(event) => {
          setSearchValue(event.target.value);
      }}
      />
    )
}
export {
    TodoSearch
}