import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { withLayout } from '@/hook/withLayout';
import { useAppContext } from "@/context/app-context";


export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: ["desgravamen", "IBK"] } },
      { params: { slug: ["desgravamen", "WEB"] } },
      { params: { slug: ["desgravamen", "WAP"] } },
      { params: { slug: ["cuentas", "WEB"] } }
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

  const { proyecto, canal } = useAppContext();

  const urlGeneration = () => {
    return `/${proyecto}/step1`
  }

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
