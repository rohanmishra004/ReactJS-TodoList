import './style.css';
import { useState, useEffect } from 'react';
import NewTodo from './TodoForm';
import TodoList from './TodoList';

const App = () => {

  //DECLARING STATES FOR COMPONENTS
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  //USING HOOKS
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])


  //HANDLING FUNCTIONS
  
  const AddTodos = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos, { id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }




  //Handling state change for checkbox to mark the task either completed or not completed
  const toggleTodos = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          //here we are creating a brand new todo and changing just one property in it
          return {...todo, completed}
        }

        return todo
      })
    })
  }

  //Deleting todos
  const deleteTodos = (id) => {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id!==id)
    })
  }

  console.log(todos)
  return ( 
    <div>

      {/* FORM COMPONENT */}
      <NewTodo AddTodos={ AddTodos } />

      {/* HEADER COMPONENT */}
      <h1 className='header'>Todo List</h1>

      {/* LIST COMPONENT */}
      <TodoList todos={todos} toggleTodos={toggleTodos } deleteTodos ={deleteTodos} />

    </div>
   );
}
 
export default App;