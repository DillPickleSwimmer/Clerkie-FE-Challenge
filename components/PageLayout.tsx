import styles from "@/styles/PageLayout.module.css";

import React, { ReactNode } from "react";

type Props = {
    title: string;
    children: ReactNode;
};

// Layout for page content with a header
export default function PageLayout({ title, children }: Props) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>{title}</header>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}
