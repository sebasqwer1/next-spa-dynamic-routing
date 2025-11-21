import { AppProvider } from "@/context/app-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [urls, setUrl] = useState("")

  useEffect(()=>{
      const fullUrl = window.location.href;
      setUrl(fullUrl|| "")
  },[])

  return (
      <>
        {urls && (
          <AppProvider uri={urls}>
            {urls}
            <Component {...pageProps} />
          </AppProvider>
        )}
        
      </>
  ) ;
}
