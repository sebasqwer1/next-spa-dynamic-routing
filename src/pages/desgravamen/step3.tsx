import Image from 'next/image';
import styles from '@/pages/page.module.css';
import { withLayout } from '@/hook/withLayout';
import { useAppContext } from '@/context/app-context';

function Step3() {
  

    const { proyecto, canal } = useAppContext();


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
                        <p>Cargando datos...</p>
                    )}

                    <ol style={{ listStyleType: "disc" }}>
                        <li className={styles.fontBold}>
                        Onboarding <code className='font-light'>Step 3</code>.
                        </li>
                    </ol>
                </main>
            </div>
        </>
  );
}

export default withLayout(Step3);
