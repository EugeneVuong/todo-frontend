const TodoFilter = ({ filter, setFilter }) => {
    return (
        <>
            <h2>Filter Todos</h2>
            <input value={filter} onChange={(event) => setFilter(event.target.value)}/>
        </>
    )
}

export default TodoFilter