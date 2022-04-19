import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function AppWrapper({ children }) {
  const [audioIndex, setAudioIndex] = useState(-1);

  return (
    <AppContext.Provider
      value={{
        audioIndex,
        setAudioIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
