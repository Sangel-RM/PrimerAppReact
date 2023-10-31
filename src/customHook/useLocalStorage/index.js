import React from "react";
function useLocalStorage(nameItem, initialValue){
  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);
  
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let parsedITEM;
        const localStorageITEM = localStorage.getItem(nameItem)
        if(!localStorageITEM){
          localStorage.setItem(nameItem, JSON.stringify(initialValue));
          parsedITEM = initialValue;
        } else {
          parsedITEM = JSON.parse(localStorageITEM);
          setItem(parsedITEM);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000)
    }, [])

  
    const saveItem = (newItem) => {
      localStorage.setItem(nameItem, JSON.stringify(newItem));
      setItem(newItem)
    }
   return {
    item,
    saveItem,
    loading,
    error
  };
  }

export { useLocalStorage }