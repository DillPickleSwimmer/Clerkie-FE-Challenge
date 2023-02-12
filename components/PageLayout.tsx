import React, { ReactNode } from 'react';
import styles from '@/styles/PageLayout.module.css';

export default function PageLayout({title, children}: {title: string, children: ReactNode}) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>{title}</header>
            <div className={styles.contentWrapper}><div className={styles.content}>{children}</div></div>
        </div>
    )
}