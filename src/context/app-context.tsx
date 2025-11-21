"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppContextType {
  proyecto: string | null;
  canal: string | null;
  token : string | null;
  semilla : string | null;
  setProyecto: (value: string | null) => void;
  setCanal: (value: string | null) => void;
  setToken : (value: string | null) => void;
  setSemilla: (value: string | null) => void;
  isChannel : boolean | null;
  setIsChannel: (value: boolean | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children, uri }: { children: ReactNode, uri: string }) => {
  const [proyecto, setProyecto] = useState<string | null>(null);
  const [canal, setCanal] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [semilla, setSemilla] = useState<string | null>(null);
  const [isChannel, setIsChannel] = useState<boolean | null>(null);
  
  useEffect(()=>{
    const parts = new URL(uri).pathname.split("/").filter(Boolean);

    // parts ejemplo:
    // WAP → ["jqiwe7271jei8u91238jdn", "WAP"]
    // IBK → ["jqiwe7271jei8u91238jdn", "IBK", "idsaud98231283"]
    const token = parts[0] ? decodeURIComponent(parts[0]) : "";
    const canal = parts[1] ?? null;
    const semilla = parts[2] ? decodeURIComponent(parts[2]) : "";


    const channels = ["WAP","IBK"]

    if(channels.includes(canal)){
      setIsChannel(false)
      setCanal(canal)
      setToken(token)
      setSemilla(semilla)
    }
  
   
  },[])

  return (
    <AppContext.Provider value={{ proyecto, canal, token, semilla, isChannel,  setProyecto, setCanal, setToken, setSemilla, setIsChannel }}>
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
