import TodoItem from "./TodoItem";

const TodoList = ({todos, toggleTodos, deleteTodos}) => {
    return ( 
        <ul className='list'>
        {todos.length === 0 && "No Todos"}
        {todos.map((todo)=>{
          return (
              <TodoItem
                  {...todo}
                //   id={todo.id}
                //   title={todo.title}
                //   completed={todo.completed}
                  key={todo.id}
                  toggleTodos={toggleTodos}
                  deleteTodos ={deleteTodos}
              />
          )
        })}
        
      </ul>
     );
}
 
export default TodoList;