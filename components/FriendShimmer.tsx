import styles from "@/styles/Friend.module.css";

import React from "react";

// Show a mock animation row to indicate that friends are loading
export default function FriendShimmer() {
    return (
        <div className={[styles.friend, styles.shimmer].join(" ")}>
            <div className={styles.header}>
                <span className={styles.left}></span>
                <span className={styles.right}></span>
            </div>
            <div className={styles.details}>
                <span className={styles.left}></span>
                <span className={styles.right}></span>
            </div>
        </div>
    );
}
