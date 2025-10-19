"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppContextType {
  proyecto: string | null;
  canal: string | null;
  setProyecto: (value: string | null) => void;
  setCanal: (value: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [proyecto, setProyecto] = useState<string | null>(null);
  const [canal, setCanal] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ proyecto, canal, setProyecto, setCanal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
};
