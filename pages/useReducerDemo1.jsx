import { useReducer } from "react";
import styles from "../styles/placeCenter.module.css";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

// fn taken useReducer Hook
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function UseReducerDemo1() {
  //useReducer takes a fn as first argument and initial state as second argument
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div className={styles.placeCenter}>
      <button onClick={increment}>+</button>
      {/* state is an object. You need to access the count variable */}
      <span>{state.count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
}
