export const Todo = ({ todo, todos, setTodos }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => id !== t.id));

    // db stuff
    // todoService.deleteTodo(id).then(() => {
    //   setTodos(todos.filter((t) => id !== t.id));
    // });
  };

  const toggleComplete = (id, todoObj) => {
    const updatedTodo = { ...todoObj, completed: !todoObj.completed };
    setTodos(todos.map((t) => (t.id !== id ? t : updatedTodo)));

    // db stuff
    // todoService.updateTodo(id, updatedTodo).then((updatedTodo) => {
    //   setTodos(todos.map((t) => (t.id !== id ? t : updatedTodo)));
    // });
  };

  const toggleHandler = (id, todo) => {
    toggleComplete(id, todo);
  };

  const label = todo.completed ? "Incomplete" : "Complete";
  const completedStyle = todo.completed
    ? { textDecoration: "line-through" }
    : { textDecoration: "" };

  return (
    <div>
      <span style={completedStyle}>{todo.title}</span>
      <button onClick={() => toggleHandler(todo.id, todo)}>{label}</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};
