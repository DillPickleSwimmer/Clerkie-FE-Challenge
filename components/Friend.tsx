import styles from "@/styles/Friend.module.css";

import React from "react";
import Link from "next/link";

export enum FriendStatus {
    normal,
    close,
    superClose,
}

export type FriendType = {
    id: string;
    name: string;
    email: string;
    phone: string;
    status: FriendStatus;
    birthday: Date;
    gender: "female" | "male";
};

type Props = { status: FriendStatus };

function FriendStatusIcon({ status }: Props) {
    switch (status) {
        case FriendStatus.close:
            return (
                <span
                    className={[styles.status, styles.closeFriends].join(" ")}
                >
                    Close Friends
                </span>
            );
        case FriendStatus.superClose:
            return (
                <span
                    className={[styles.status, styles.superCloseFriends].join(
                        " "
                    )}
                >
                    Super Close Friends
                </span>
            );
        default:
            return null;
    }
}

// Display a friend details row
export default function Friend({ friend }: { friend: FriendType }) {
    return (
        <Link className={styles.friend} href={`/friends/${friend.id}`}>
            <div className={styles.header}>
                <span className={styles.name}>{friend.name}</span>
                <FriendStatusIcon status={friend.status} />
            </div>
            <div className={styles.details}>
                {`${friend.email} • ${friend.phone}`}
            </div>
        </Link>
    );
}
