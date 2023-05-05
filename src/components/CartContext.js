import React, { useState } from 'react';

const MyContext = React.createContext();

function ContextProvider(props) {
  let [itemState, setitemState] = useState([]);

  var obj = {
    items: itemState,
    addItem: (item) => {
      setitemState([...itemState, item]);
    },
    removeItem: (id) => {
      itemState = itemState.filter((item) => item.id != id);

      //   itemState.splice(itemState.findIndex(function(i){
      //     return i.id === id;
      // }), 1);
    },
  };

  return (
    <>
      <MyContext.Provider value={obj}>{props.children}</MyContext.Provider>
    </>
  );
}



export { ContextProvider, MyContext };
