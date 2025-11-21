import { useAppContext } from "@/context/app-context";

function Error() {

    const {canal, token, semilla} = useAppContext()

    return (
        <div style={{width: "100%"}}>
            <p>canal: {canal}</p>
            <p>token: {token}</p>
            <p>semilla: {semilla}</p>
        </div>
    );
}

export default Error