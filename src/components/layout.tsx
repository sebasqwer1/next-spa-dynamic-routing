import { ReactNode } from "react";
import styles from "./layout.module.css"; // crea tus estilos aquí
import Image from "next/image";

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppContext } from "@/context/app-context";

interface LayoutProps {
  children: ReactNode;
}

import logoBB from "../../public/assets/images/logo-bb.png";

export default function Layout({ children }: LayoutProps) {


    const router = useRouter();
    const { setProyecto, setCanal, proyecto, setToken, setSemilla, canal } = useAppContext();

    const slug = router.query.slug as string[] | undefined;



    useEffect(() => {

        if (!router.isReady) return;

        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
            e.returnValue = "";
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        

        const { token, semilla } = router.query;

        setToken(typeof token === "string" ? token : null);
        setSemilla(typeof semilla === "string" ? semilla : null);

        if (router.pathname === "/") {
            setProyecto("desgravamen");
            setCanal("WEB");
            router.replace("/desgravamen/WEB");
            return;
        }

        if (proyecto == null && router.pathname !== "/[...slug]" && router.pathname !=="/error/404" ){
            router.push("/")
        }

        if (typeof window !== "undefined" && slug && slug.length >= 2) {
            setProyecto(slug[0]);
            setCanal(slug[1]);
        }

        return () => window.removeEventListener("beforeunload", handleBeforeUnload);

    }, [router.isReady]);

    return (
        <div className={styles.container}>

            {
                canal === "WEB" && (
                    <header className={styles.header}>
                        <div
                            style={{
                                width: '100%',
                                position: 'fixed',
                                cursor: 'pointer', 
                                display: 'flex', 
                                paddingLeft: '30px', 
                                justifyContent: 'left',
                                height:'70px',
                                alignItems:'center',
                                background : 'white',
                                boxShadow: '0 1px 20px rgba(0, 0, 0, 0.1)'
                            }}>
                                <Image
                                    src={logoBB}
                                    alt="logo-bb"
                                    width={200}
                                    height={25}
                                />
                            </div>
                    </header>
                )
            }

            

            <main className={styles.main}>{children}</main>

            {
                canal === "WEB" && (
                    <footer className={styles.footer}>
                        <p className={styles.fontBold}>© 2025 Mi Aplicación</p>
                    </footer>
                )
            }

           
        </div>
    );
}
