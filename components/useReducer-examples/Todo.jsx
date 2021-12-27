import React from "react";
import { ACTIONS } from "../../pages/useReducerDemo2";

export const Todo = ({ todo, dispatch }) => {
  const color = { color: todo.complete ? "#AAA" : "#000" };

  const toggleItem = () => {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  };
  const deleteItem = () =>
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });

  return (
    <div>
      <span style={color}>{todo.name}</span>
      <button onClick={toggleItem}>Togggle</button>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};
