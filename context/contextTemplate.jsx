import { createContext, useState } from "react";

const FileStateContext = createContext();

const FileStateProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return (
    <FileStateContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </FileStateContext.Provider>
  );
};

export { FileStateProvider, FileStateContext };
