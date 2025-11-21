import { withLayout } from "@/hook/withLayout";
import { useEffect } from "react";

function Home() {

  useEffect(()=>{
    console.log("inicio")
  },[])

  return <p>Redirigiendo...</p>;
}

export default withLayout(Home)