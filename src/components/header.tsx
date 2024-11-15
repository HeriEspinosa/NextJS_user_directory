'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './_styles/header.module.css';
import { IUser } from '@/interfaces/IUser';
import { initialData } from '@/data/initialRequest';

export function Header() {
    // STATES
    const [users, setUsers] = useState<IUser[] | undefined>();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<IUser[] | undefined>([]);
    const searchRef = useRef<HTMLDivElement | null>(null);

    // USEEFFECT
    useEffect(() => {
        initialData()
            .then((result) => setUsers(result))
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setFilteredUsers([]);
                setSearchTerm('');
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // METHODS
    const handleSearchChange = (e: { target: { value: string } }) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        if (value) {
            // Filtramos hasta tres usuarios por nombre o nombre de usuario
            const matches = users?.filter(
                (user: { firstName: string; username: string }) =>
                        user.firstName.toLowerCase().includes(value) ||
                        user.username.toLowerCase().includes(value)
                )
                .slice(0, 3);

            setFilteredUsers(matches);
        } else {
            setFilteredUsers([]);
        }
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <h4>Ing. Heri Espinosa</h4>
                </div>
                <div className={styles.search} ref={searchRef}>
                    <input
                        type="text"
                        placeholder="Search user..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                    {searchTerm && filteredUsers && filteredUsers.length > 0 && (
                        <ul className={styles.suggestions} onClick={()=> setSearchTerm('')}>
                            {filteredUsers?.map((user) => (
                                <li
                                    key={user.id}
                                    className={styles.suggestionItem}
                                >
                                    <Link
                                        href={`/user/${user.id}`}
                                        className={styles.suggestionLink}
                                    >
                                        {user.firstName} {user.lastName} ({user.username})
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
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
