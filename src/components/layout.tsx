import { ReactNode } from "react";
import styles from "./layout.module.css"; // crea tus estilos aquí
import Image from "next/image";
import { useAppContext } from "@/context/app-context";

interface LayoutProps {
  children: ReactNode;
}

import logoBB from "../../public/assets/images/logo-bb.png";

export default function Layout({ children }: LayoutProps) {

    const { canal } = useAppContext();

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
