const Todo = ({ todo }) => {
  const deleteTodo = (id) => {
    todoService.deleteTodo(id).then(() => {
      setTodos(todos.filter((t) => id !== t.id));
    });
  };

  const toggleComplete = (id, todoObj) => {
    const updatedTodo = { ...todoObj, completed: !todoObj.completed };
    todoService.updateTodo(id, updatedTodo).then((updatedTodo) => {
      console.log(updatedTodo);
      setTodos(todos.map((t) => (t.id !== id ? t : updatedTodo)));
    });
  };

  const toggleHandler = (id, todo) => {
    console.log(id, todo);
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

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  return (
    <>
      <h2>Todo List</h2>
      <div>
        {todos.map((t) => (
          <Todo
            key={t.id}
            todo={t}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
