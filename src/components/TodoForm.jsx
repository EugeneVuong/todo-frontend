import { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = async (newTodo) => {
    try {
      const todo = await todoService.createTodo(newTodo);
      setTodos(todos.concat(todo));
    } catch (error) {
      console.log(error);
    }
  };

  const newTodoHandler = (event) => {
    event.preventDefault();
    createTodo({ title: newTodo });
    setNewTodo("");
  };

  return (
    <>
      <h2>Create Todo</h2>
      <form onSubmit={(event) => newTodoHandler(event)}>
        <input
          placeholder="Todo Title"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TodoForm;
