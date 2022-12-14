import React, { useState, useEffect, useRef } from "react";
import { GrAdd } from "react-icons/gr";

function TodoForm(props) {
  const [input, setInput] = useState(" ");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmite = (e) => {
    e.preventDefault();

    props.onSubmite({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmite}>
        <input
          type="text"
          placeholder="add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">
          {" "}
          <GrAdd className="plus-icon" />
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
