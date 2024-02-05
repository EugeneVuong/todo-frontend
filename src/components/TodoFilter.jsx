import { useState } from "react";

const TodoFilter = () => {
  const [filter, setFilter] = useState("");

  return (
    <>
      <h2>Filter Todos</h2>
      <input
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
    </>
  );
};

export default TodoFilter;
