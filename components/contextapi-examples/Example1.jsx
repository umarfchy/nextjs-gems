// import {use} from "react";
import { FileStateProvider } from "../../context/contextTemplate";
import { Example2 } from "./Example2";

export const Example1 = () => {
  return (
    <FileStateProvider>
      <Example2 />
    </FileStateProvider>
  );
};
