import Image from 'next/image';
import styles from '@/pages/page.module.css';
import { withLayout } from '@/hook/withLayout';

function Error404() {
  
    return (
        <>
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

                    <ol style={{ listStyleType: "disc" }}>
                        <li className={styles.fontBold}>
                        Error<code className='font-light'>Página no encontrada</code>.
                        </li>
                    </ol>
                </main>
            </div>
        </>
  );
}

export default withLayout(Error404);
