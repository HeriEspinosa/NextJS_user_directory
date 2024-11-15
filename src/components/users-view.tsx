// components/UsersView.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

import { IUser } from '@/interfaces/IUser';
import styles from './_styles/users-view.module.css';

interface Props {
    users: IUser[];
}

export function UsersView({ users }: Props) {

    return (
        <main className={styles.main}>
            {users?.map((user) => (
                <div
                    key={user.id}
                    className={styles.card}
                >
                    <Link href={`/user/${user.id}`}>
                    <div className={styles.header}>
                        <figure>
                            <Image
                                src={user.image}
                                alt={`${user.firstName} ${user.lastName}`}
                                width={80}
                                height={80}
                                // className={styles.avatar}
                            />
                        </figure>
                        <div className={styles.info}>
                            <h2
                                className={styles.name}
                            >{`${user.firstName} ${user.lastName}`}</h2>
                            <p
                                className={styles.username}
                            >{`@${user.username}`}</p>
                            <p className={styles.age}>{`Age: ${user.age}`}</p>
                        </div>
                    </div>
                    <div>
                        <p className={styles.email}>{user.email}</p>
                    </div>
                    </Link>
                </div>
            ))}
        </main>
    );
}
