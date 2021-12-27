/* This a general example on how to use context api */

import { useContext } from "react";
import { FileStateContext } from "../../context/contextTemplate";
export const Example2 = () => {
  // consuming the context
  const value = useContext(FileStateContext);
  const { counter, setCounter } = value;

  const placeCenter = {
    fontSize: "large",
    display: "grid",
    placeItems: "center",
  };
  return (
    <div style={placeCenter}>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};
