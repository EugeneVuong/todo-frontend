import { useState, useEffect } from "react";
import todoService from "./services/todos";
import TodoForm from "./components/TodoForm";
import { Todo } from "./components/Todo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // db stuff
    // todoService.getAllTodos().then((todos) => {
    //   setTodos(todos);
    // });
  }, []);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm todos={todos} setTodos={setTodos} />

      {/* filter */}
      <h2>Filter Todos</h2>
      <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />

      {/* display todos */}
      <h2>Todo List</h2>
      <div>
        {filter.length > 0
          ? filteredTodos.map((t) => (
              <Todo key={t.id} todo={t} todos={todos} setTodos={setTodos} />
            ))
          : todos.map((t) => (
              <Todo key={t.id} todo={t} todos={todos} setTodos={setTodos} />
            ))}
      </div>
    </div>
  );
};

export default App;
