import memoWithPropsObj from '@/utils/memoWithPropsObj';

import styles from '@/styles/Friend.module.css';

import React from 'react';
import Link from 'next/link';
import FriendType, { FriendStatus } from '@/types/FriendType';

type Props = { status: FriendStatus };

function FriendStatusIcon({ status }: Props) {
    switch (status) {
        case FriendStatus.close:
            return <span className={[styles.status, styles.closeFriends].join(' ')}>Close Friends</span>;
        case FriendStatus.superClose:
            return <span className={[styles.status, styles.superCloseFriends].join(' ')}>Super Close Friends</span>;
        default:
            return null;
    }
}

// Display a friend details row
function Friend({ friend }: { friend: FriendType }) {
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
