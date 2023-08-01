const TodoItem = ({completed, id, title, toggleTodos, deleteTodos}) => {
    return ( 
        <li>
              <label>
                <input
                  type="checkbox"
                  checked={completed}
                  onChange={(e) => {
                    toggleTodos(id, e.target.checked)
                  }}
                />{title}
              </label>
              <button
                className="btn btn-danger"
                onClick={()=>deleteTodos(id)}
              >Delete</button>
            </li>
     );
}
 
export default TodoItem;