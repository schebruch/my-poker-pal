import React, { createContext, useState, ReactNode } from "react";

interface SessionContextProps {
  activeSession: boolean;
  buyIns: BuyIn[];
  addBuyIn: (buyIn: BuyIn) => void;
  startSession: () => void;
  endSession: () => void;
}

interface BuyIn {
  amount: number;
  casino: string;
  timestamp: Date;
}

export const SessionContext = createContext<SessionContextProps>({
  activeSession: false,
  buyIns: [],
  startSession: () => {},
  endSession: () => {},
  addBuyIn: (buyIn: BuyIn) => {},
});

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSession, setActiveSession] = useState(false);
  const [buyIns, setBuyIns] = useState<BuyIn[]>([]);
  const startSession = () => {
    setActiveSession(true);
    setBuyIns([]);
  };
  const endSession = () => setActiveSession(false);
  const addBuyIn = (buyIn: BuyIn) => {
    setBuyIns([...buyIns, buyIn]);
  };

  return (
    <SessionContext.Provider
      value={{ activeSession, buyIns, startSession, endSession, addBuyIn }}
    >
      {children}
    </SessionContext.Provider>
  );
};
