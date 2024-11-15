import Link from 'next/link';
import styles from '../../_styles/summary.module.css';

export default function SummaryPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Tecnologías Utilizadas</h1>
            <ul className={styles.list}>
                <Link
                    href={'https://nextjs.org/'}
                    target="black"
                    className={styles.item}
                >
                    Next.js 15.0.3
                </Link>
                <Link
                    href={'https://www.typescriptlang.org/'}
                    target="black"
                    className={styles.item}
                >
                    TypeScript
                </Link>
                <Link
                    href={'https://axios-http.com/'}
                    target="black"
                    className={styles.item}
                >
                    Axios
                </Link>
                <Link
                    href={'https://github.com/css-modules/css-modules/'}
                    target="black"
                    className={styles.item}
                >
                    CSS Modules
                </Link>
            </ul>
        </div>
    );
}
