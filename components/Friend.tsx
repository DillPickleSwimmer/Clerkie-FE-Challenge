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
    phone: number, 
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

function formatPhone(phone: number): string {
    const part1 = Math.floor(phone / 10000000); 
    const part2 = Math.floor((phone - part1 * 10000000) / 10000); 
    const part3 = (phone - part1 * 10000000 - part2 * 10000); 
    return `(${part1.toString().padStart(3, '0')}) ${part2.toString().padStart(3, '0')}-${part3.toString().padStart(4, '0')}`;
}

export default function Friend({friend}: {friend: FriendType}) {
    return <div className={styles.friend}>
        <div className={styles.header}>
            <span className={styles.name}>{friend.name}</span>
            <FriendStatusIcon status={friend.status} />
        </div>
        <div className={styles.details}>
            {`${friend.email} • ${formatPhone(friend.phone)}`}
        </div>
    </div>;
}