// app/context/SessionContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface SessionContextProps {
  activeSession: boolean;
  startSession: () => void;
  endSession: () => void;
}

export const SessionContext = createContext<SessionContextProps>({
  activeSession: false,
  startSession: () => { },
  endSession: () => { },
});

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSession, setActiveSession] = useState(false);

  const startSession = () => setActiveSession(true);
  const endSession = () => setActiveSession(false);

  return (
    <SessionContext.Provider value={{ activeSession, startSession, endSession }}>
      {children}
    </SessionContext.Provider>
  );
};
