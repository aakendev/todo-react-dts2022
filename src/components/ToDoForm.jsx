import React from "react";
import { useState } from "react";

const ToDoForm = ({ handleClick }) => {
  const [todo, setTodo] = useState("");

  const submitHandler = (todo) => {
    handleClick(todo);
    setTodo("");
  };

  return (
    <div className="todo-form">
      <p>~ Today I need to ~</p>
      <span>
        <input value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={() => submitHandler(todo)}>Submit</button>
      </span>
      <p>{todo}</p>
    </div>
  );
};

export default ToDoForm;
