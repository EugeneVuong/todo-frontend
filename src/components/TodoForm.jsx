import { useState } from "react"

const TodoForm = ({ createTodo }) => {
    const [newTodo, setNewTodo] = useState('')

    const newTodoHandler = (event) => {
        event.preventDefault()
        createTodo({ title: newTodo })
        setNewTodo('')
    }


    return (
        <>
            <h2>Create Todo</h2>
            <form onSubmit={(event) => newTodoHandler(event)}>
                <input placeholder='Todo Title' value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default TodoForm