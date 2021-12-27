import { useState, useReducer } from "react";
import { Todo } from "../components/useReducer-examples/Todo";
// import styles from "../styles/placeCenter.module.css";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

// fn taken useReducer Hook
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        // if the id matches the payload id then change the complete property of todo
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function UseReducerDemo2() {
  //useReducer takes a fn as first argument and initial state as second argument
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  console.log(todos);
  function handleSubmit(e) {
    e.preventDefault();
    if (name) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
      setName("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" />
      <p> </p>
      <p> </p>
      <p> </p>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </form>
  );
}
