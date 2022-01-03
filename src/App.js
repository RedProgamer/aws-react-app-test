import { useState, useEffect } from "react";
import Form from "./component/Form";
import Items from "./component/Items";

const INIT_DATA = [
  {
    id: 0.345,
    item: 'Fruits'
  },
  {
    id: 0.432,
    item: 'Chicken'
  }
];

function App() {

  const [items, setItems] = useState(INIT_DATA);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const newItemHandler = (newItem) => {
    setItems(prevState => {
      return [...prevState, newItem];
    });
  };

  const editClickHandler = (id) => {
    let value = window.prompt('Update Item : ') || '';
    while(value.trim().length === 0) {
      value = window.prompt('Please put in a correct value : ');
    }
    const isConfirm = window.confirm('Are you sure about that?');

    if(isConfirm) {
      const exisitingIdx = items.findIndex(item => item.id === id);
      const ItemToUpdate = items[exisitingIdx];

      const updatedItem = {
        ...ItemToUpdate,
        item: value,
      };

      const updatedItemsList = [...items];
      updatedItemsList[exisitingIdx] = updatedItem;

      setItems(updatedItemsList);
    }
  };
  const deleteClickHandler = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Form onAddNewItem={newItemHandler}/>
      </div>
      <div>
        <Items items={items} onEditCall={editClickHandler} onDeleteCall={deleteClickHandler}/>
      </div>
    </div>
  );
}

export default App;
