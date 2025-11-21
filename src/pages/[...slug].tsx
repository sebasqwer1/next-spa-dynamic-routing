import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { withLayout } from '@/hook/withLayout';
import { useAppContext } from "@/context/app-context";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ["degravamen"] } },
      { params: { slug: ["proteccion"] } },
      { params: { slug: ["estudiantil"] } },
      { params: { slug: ["giros"] } }
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  return {
    props: { slug: params.slug }
  };
}

function CatchAllPage() {

  const { proyecto, canal, token, semilla, setCanal, setIsChannel, setProyecto } = useAppContext();

  // const { checking } = useConditionalRedirect([
  //   { condition: canal === "IBK", target: `/${proyecto}/step3` },
  // ]);

  const urlGeneration = () => {
    return `/${proyecto}/step1`
  }

  
  const router = useRouter();

  

  useEffect(()=>{
    const slug = router.query.slug as string[] | undefined;
    setCanal("WEB")
    setIsChannel(true)
    if(slug){
      setProyecto(slug[0])
    }
    
  },[])


  // if (checking) { return <p>Cargando ...</p> }

  return (
  
      <div className={styles.page}>
        <main className={styles.main}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />

          {proyecto && canal ? (
            <ol>
              <li className={styles.fontBold}>
                Proyecto <code className='font-light'>{proyecto}</code>
              </li>
              <li className={styles.fontBold}>
                Canal <code className='font-light'>{canal}</code>
              </li>
              {
                token && (
                  <li className={styles.fontBold}>
                    Token <code className='font-light'>{token}</code>
                  </li>
                )
              }

               {
                semilla && (
                  <li className={styles.fontBold}>
                    Semilla <code className='font-light'>{semilla}</code>
                  </li>
                )
              }
            </ol>
          ) : (
            <>
              <br /><br /><br />
            </>
          )}
          

          <div className={styles.ctas}>
            <Link href={urlGeneration()} className={styles.secondary}>
              Siguiente
            </Link>
          </div>
        </main>
      </div>
    
  );
}

export default withLayout(CatchAllPage)
