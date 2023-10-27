import { createContext, useCallback, useState } from "react";
import { ShowCaseContextType } from "../../types/ShowCaseContextType";

type IShowCaseContext = {
    children: React.ReactNode;
}

export const EventContext = createContext<ShowCaseContextType | undefined>(undefined);

export const ShowCaseContext: React.FC<IShowCaseContext> = ({ children }) => {
  const [contentStatus, setContentStatus] = useState(false);

  const handleContextStatus = useCallback(() => {
    setContentStatus((prevContentStatus) => !prevContentStatus);
  }, []);

  return (
    <EventContext.Provider value={{ contentStatus, handleContextStatus }}>
      {children}
    </EventContext.Provider>
  );
};
