import memoWithPropsObj from '@/utils/memoWithPropsObj';
import FriendType, { FriendStatus } from '@/types/FriendType';
import FriendStatusIcon from '@/components/FriendStatusIcon';

import styles from '@/styles/Friend.module.css';

import React from 'react';
import Link from 'next/link';

type Props = {
    friend: FriendType;
    search: string;
};

// Display a friend details row
function Friend({ friend, search }: Props) {
    let beforeSearchName = null;
    let searchName = null;
    let afterSearchName = null;

    if (search != null) {
        const searchIndex = friend.name.toLowerCase().indexOf(search.toLowerCase());
        beforeSearchName = searchIndex > 0 ? friend.name.substring(0, searchIndex) : null;
        searchName = friend.name.substring(searchIndex, searchIndex + search.length);
        afterSearchName = friend.name.substring(searchIndex + search.length);
    }

    return (
        <Link
            className={styles.friend}
            href={`/friends/${friend.id}`}
        >
            <div className={styles.header}>
                <span className={styles.name}>
                    {search == null ? (
                        friend.name
                    ) : (
                        <>
                            {beforeSearchName}
                            <span className={styles.searchName}>{searchName}</span>
                            {afterSearchName}
                        </>
                    )}
                </span>
                <FriendStatusIcon status={friend.status} />
            </div>
            <div className={styles.details}>{`${friend.email} • ${friend.phone}`}</div>
        </Link>
    );
}

export default memoWithPropsObj(Friend);
