import memoWithPropsObj from '@/utils/memoWithPropsObj';
import FriendType, { FriendStatus } from '@/types/FriendType';
import FriendStatusIcon from '@/components/FriendStatusIcon';

import styles from '@/styles/Friend.module.css';

import React from 'react';
import Link from 'next/link';

type Props = { friend: FriendType };

// Display a friend details row
function Friend({ friend }: Props) {
    return (
        <Link
            className={styles.friend}
            href={`/friends/${friend.id}`}
        >
            <div className={styles.header}>
                <span className={styles.name}>{friend.name}</span>
                <FriendStatusIcon status={friend.status} />
            </div>
            <div className={styles.details}>{`${friend.email} • ${friend.phone}`}</div>
        </Link>
    );
}

export default memoWithPropsObj(Friend);
