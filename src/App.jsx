import { useState, useEffect } from "react";
import todoService from "./services/todos";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoService.getAllTodos().then((todos) => {
      setTodos(todos);
    });
  }, []);

  const searchTodo = todos.filter((t) =>
    t.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoFilter />
      <TodoList todos={searchTodo} />
    </div>
  );
};

export default App;
