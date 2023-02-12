import React from 'react';
import styles from '@/styles/Friend.module.css';

export enum FriendStatus {
    normal, 
    close,
    superClose
}

export type FriendType = {
    name: string, 
    email: string, 
    phone: string, 
    status: FriendStatus
}

function FriendStatusIcon({status}: {status: FriendStatus}) {
    switch(status) {
        case FriendStatus.close: 
            return <span className={[styles.status, styles.closeFriends].join(" ")}>Close Friends</span>;
        case FriendStatus.superClose:
            return <span className={[styles.status, styles.superCloseFriends].join(" ")}>Super Close Friends</span>;
        default: 
            return null; 
    }
}

export default function Friend({friend}: {friend: FriendType}) {
    return <div className={styles.friend}>
        <div className={styles.header}>
            <span className={styles.name}>{friend.name}</span>
            <FriendStatusIcon status={friend.status} />
        </div>
        <div className={styles.details}>
            {`${friend.email} • ${friend.phone}`}
        </div>
    </div>;
}