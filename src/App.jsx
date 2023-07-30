import './style.css'
import { useState } from 'react';

const App = () => {
  const [newItem, setItem] = useState("");
  const [todos,setTodos] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [...currentTodos,{id:crypto.randomUUID(), title:newItem, completed:false}]
    })
    setItem("")
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='new-item-form'>
      <div className="form-row">
        <label htmlFor='item'>New Item</label>
          <input value={newItem} onChange={(e) => {
            setItem(e.target.value)
        }} type="text" id="item" />
      </div>
      <button className='btn'>Add</button>
    </form>
      <h1 className='header'>Todo List</h1>
      <ul className='lsit'>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={ todo.completed} />{todo.title}
              </label>
              <button className='btn btn-danger'>Delete</button>
            </li>
          )
        })}
        
      </ul>
    </>
    );
}
 
export default App;