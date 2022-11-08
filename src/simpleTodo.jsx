import React, { useState } from "react";
const simpleTodo = () => {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const handleForm = (e) => {
    e.preventDefault();
    setTodo((prev) => {
      return [...prev, value];
    });
    setValue("");
  };
  const removeTodo = (ind) => {
    const filteredTodo = todo.filter((value, index) => {
      return index !== ind;
    });
    setTodo(filteredTodo);
  };
  console.log(todo);
  return (
    <>
      <div className="todo">
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter here .."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="add">
            Add
          </button>
        </form>
        <br />
        <br />
        {todo.map((value, index) => {
          return (
            <div key={index}>
              {index + 1} {value}{" "}
              <button onClick={() => removeTodo(index)}>-</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default simpleTodo;
