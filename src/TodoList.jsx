import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  addTodo,
  // fetchTodos,
  deleteTodo,
  // setNewTodo,
} from "./store/todosReducer";

const TodoList = () => {
  const [newtodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTodos());
  // }, [dispatch]);

  const handleClick = () => {
    if (newtodo.trim() !== "") {
      dispatch(addTodo(newtodo));
      setNewTodo("");
    }
  };
  const onDeleteTodo = (todo) => {
    dispatch(deleteTodo(todo));
  };

  return (
    <div>
      TodoList
      <input
        className="input"
        type="text"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newtodo}
      />
      <button onClick={handleClick}>Добавить</button>
      <ul>
        {todos &&
          todos.map((t) => (
            <div className="list">
              <div>{t}</div>
              <div className="krestic" onClick={() => onDeleteTodo(t)}>
                &times;
              </div>
            </div>
          ))}
      </ul>
    </div>
  );
};
export default TodoList;
