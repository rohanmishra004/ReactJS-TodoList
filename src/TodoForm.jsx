import { useState } from "react";

const NewTodo = ({AddTodos}) => {
  const [newItem, setNewItem]= useState("")


  //Handling Form Submit
  const  handleSubmit =(e) => {
    e.preventDefault();
    if (newItem === "") {
      return
    }
    AddTodos(newItem)
    setNewItem("")
  }
    return ( 
      <>
        <form onSubmit={handleSubmit} className='new-item-form'>
          <div className="form-row">
            <label htmlFor='item'>New Item</label>
              <input
              value={newItem}
              type="text"
              id='item'
              onChange={(e) => {
                setNewItem(e.target.value)
              }}
            />
          </div>
          <button className='btn'>Add</button>
        </form>
      </>
     );
}
 
export default NewTodo;