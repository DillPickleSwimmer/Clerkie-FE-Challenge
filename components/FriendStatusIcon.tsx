import { FriendStatus } from '@/types/FriendType';
import memoWithPropsObj from '@/utils/memoWithPropsObj';

import styles from '@/styles/FriendStatusIcon.module.css';

import React from 'react';

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

export default memoWithPropsObj(FriendStatusIcon);
