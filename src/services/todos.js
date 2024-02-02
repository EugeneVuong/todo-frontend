import axios from 'axios'

const baseUrl = 'http://localhost:3000/api/todo'

const getAllTodos = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createTodo = async (newTodo) => {
    const response = await axios.post(baseUrl, newTodo)
    return response.data
}

const deleteTodo = async (id) => {
    await axios.delete(`${baseUrl}/${id}`)
}

const updateTodo = async (id, newTodo) => {
    const response = await axios.put(`${baseUrl}/${id}`, newTodo)
    return response.data
}

export default { createTodo, getAllTodos, deleteTodo, updateTodo }