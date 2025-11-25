// app/context/SessionContext.tsx

import React, { createContext, ReactNode, useState } from "react";
import 'react-native-get-random-values'; 
import { v4 as uuidv4 } from 'uuid';
// -----------------------------------------------------
// Types
// -----------------------------------------------------
export interface BuyIn {
  id: string;
  amount: number;
  casino: string;
  timestamp: Date;
}

export interface SessionContextProps {
  activeSession: boolean;
  buyIns: BuyIn[];
  startSession: () => void;
  endSession: () => void;
  addBuyIn: (buyIn: Omit<BuyIn, "id">) => void;
  removeBuyIn: (id: string) => void;
}

// -----------------------------------------------------
// Generate Unique ID Using expo-random
// -----------------------------------------------------
const generateId = (): string => {
  return uuidv4();
};

// -----------------------------------------------------
// Context
// -----------------------------------------------------
export const SessionContext = createContext<SessionContextProps>({
  activeSession: false,
  buyIns: [],
  startSession: () => {},
  endSession: () => {},
  addBuyIn: () => {},
  removeBuyIn: () => {},
});

// -----------------------------------------------------
// Provider
// -----------------------------------------------------
export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [activeSession, setActiveSession] = useState(false);
  const [buyIns, setBuyIns] = useState<BuyIn[]>([]);

  const startSession = () => {
    setActiveSession(true);
    setBuyIns([]);
  };

  const endSession = () => {
    setActiveSession(false);
    setBuyIns([]);
  };

  const addBuyIn = (buyIn: Omit<BuyIn, "id">) => {
    const newBuyIn: BuyIn = {
      id: generateId(),
      ...buyIn,
    };
    setBuyIns((prev) => [...prev, newBuyIn]);
  };

  const removeBuyIn = (id: string) => {
    setBuyIns((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <SessionContext.Provider
      value={{
        activeSession,
        buyIns,
        startSession,
        endSession,
        addBuyIn,
        removeBuyIn,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};
