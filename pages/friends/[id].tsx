import PageLayout from '@/components/PageLayout';

import styles from '@/styles/FriendPage.module.css';
import FriendType from '@/types/FriendType';
import FriendStatusIcon from '@/components/FriendStatusIcon';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Friend details page
export default function FriendsPage() {
    const [loading, setLoading] = React.useState(false);
    const [friend, setFriend] = React.useState<FriendType | null>(null);

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            setLoading(true);
            fetch(`/api/friends/${id}`)
                .then((res) => res.json())
                .then((res) => {
                    setFriend({
                        ...res,
                        birthday: new Date(res.birthday),
                    });
                })
                .catch((e) => console.log(e))
                .finally(() => setLoading(false));
        }
    }, [id]);

    return (
        <PageLayout title="Friends">
            {loading || friend == null ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <Link href="/friends">{'<'} Back</Link>
                    <div className={styles.header}>
                        <div className={styles.name}>{friend.name}</div>
                        <FriendStatusIcon status={friend.status} />
                    </div>
                    <table className={styles.details}>
                        <tr>
                            <td>Gender: </td>
                            <td>{friend.gender}</td>
                        </tr>
                        <tr>
                            <td>Email: </td>
                            <td>{friend.email}</td>
                        </tr>
                        <tr>
                            <td>Phone: </td>
                            <td>{friend.phone}</td>
                        </tr>
                        <tr>
                            <td>Birthday: </td>
                            <td>{friend.birthday.toDateString()}</td>
                        </tr>
                    </table>
                </div>
            )}
        </PageLayout>
    );
}
