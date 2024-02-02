const Todo = ({ todo, deleteTodo, toggleComplete }) => {

    const toggleHandler = (id, todo) => {
        console.log(id, todo)
        toggleComplete(id, todo)
    }

    const label = todo.completed ? 'Incomplete' : 'Complete'
    const completedStyle = todo.completed ? {textDecoration: 'line-through'} : {textDecoration: ''}

    return (
        <div>
            <span style={completedStyle}>{todo.title}</span>
            <button onClick={() => toggleHandler(todo.id, todo)}>{label}</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
    return (
        <>
            <h2>Todo List</h2>
            <div>{todos.map(t => <Todo key={t.id} todo={t} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />)}</div>
        </>
    )
}

export default TodoList