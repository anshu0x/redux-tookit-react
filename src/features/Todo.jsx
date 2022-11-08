import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './todoSlice'
const Todo = () => {
  const dispatch = useDispatch()
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputRef.current.value))
    inputRef.current.value=""
  };
  const todo = useSelector((state)=>state.todolist.value)
  console.log(todo);
  const inputRef = useRef(null)
  return (
    <>
      <div className="todo">
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter here .."
            ref={inputRef}
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
              <button onClick={()=>dispatch(removeTodo(index))}>-</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
