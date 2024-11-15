'use client';

import Link from 'next/link';
import styles from './_styles/header.module.css';

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <h3>Ing. Heri Espinosa</h3>
                </div>
                <div className={styles.nav}>
                    <Link href="/" className={styles.link}>
                        Home
                    </Link>
                    <Link href="/summary" className={styles.link}>
                        Summary
                    </Link>
                </div>
            </nav>
        </header>
    );
}
