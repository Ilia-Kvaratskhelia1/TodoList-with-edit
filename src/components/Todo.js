import { useState } from "react";
import React from "react";
import TodoForm from "./TodoForm";
import { VscError, VscCheckAll } from "react-icons/vsc";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
function Todo({ todos, comptleteTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submiteUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmite={submiteUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      placeholder="edit your plan"
      className={todo.complete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => comptleteTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <VscError onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <VscCheckAll
          className="cheked-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}
export default Todo;
