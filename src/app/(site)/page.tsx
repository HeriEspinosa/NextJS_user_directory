import { notFound } from 'next/navigation';

import { UsersView } from '@/components/users-view';
import { initialData } from '@/data/initialRequest';
import { IUser } from '@/interfaces/IUser';
import styles from '../_styles/home.module.css'

export default async function HomePage() {
    const users: IUser[] = await initialData();

    if (users[0]) {
        return (
            <main className={styles.main}>
                <UsersView users={users} />
            </main>
        );
    } else {
        notFound();
    }
}
