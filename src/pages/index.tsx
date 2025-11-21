import { useAppContext } from "@/context/app-context";
import { withLayout } from "@/hook/withLayout";
import { useEffect } from "react";

function Home() {

  const {canal, token, semilla} = useAppContext()

  useEffect(()=>{
    console.log("inicio")
  },[])

  return   <div style={{width: "100%"}}>
            <p>canal: {canal}</p>
            <p>token: {token}</p>
            <p>semilla: {semilla}</p>
        </div>;
}

export default withLayout(Home)