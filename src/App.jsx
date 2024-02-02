import { useState, useEffect } from 'react'
import todoService from './services/todos'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'

const App = () => {

  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    todoService.getAllTodos()
      .then((todos) => {
        setTodos(todos)
      })

  }, [])

  const createTodo = async (newTodo) => {
    try {
      const todo = await todoService.createTodo(newTodo)
      setTodos(todos.concat(todo))
    } catch (error) {
      console.log(error)
    }
  }

  const deleteTodo = (id) => {
    todoService.deleteTodo(id)
      .then(() => {
        setTodos(todos.filter(t => id !== t.id))
      })
  }

  const toggleComplete = (id, todoObj) => {
    const updatedTodo = {...todoObj, completed: !todoObj.completed}
    todoService.updateTodo(id, updatedTodo)
      .then((updatedTodo) => {
        console.log(updatedTodo)
        setTodos(todos.map(t => (t.id !== id ? t : updatedTodo)))
      })
  }

  
   
  const searchTodo = todos.filter(t => t.title.toLowerCase().includes(filter.toLowerCase()))
  

  return (
    <div>
      <h1>Todos</h1>
      <TodoForm createTodo={createTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList todos={searchTodo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
    </div>
  )
}

export default App
