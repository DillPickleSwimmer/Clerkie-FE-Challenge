import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';



export default function Navbar() {
    const router = useRouter()
    const selectedPath = router.pathname;

    return (
        <div className={styles.navbar}>
            <div className={styles.title}>
                <Image src="/icons/logo.svg" height={20} width={20} alt="Clerkie Logo" />
                <span className={styles.titleCaption}>Clerkie Challenge</span>
            </div>
            <nav className={styles.nav}>
                <NavbarLink path='/' icon='/icons/home.svg' caption='Home' selected={selectedPath === '/'} />
                <NavbarLink path='/friends' icon='/icons/friends.svg' caption='Friends' selected={selectedPath?.startsWith('/friends')}/>
            </nav>
        </div>
    )
}

function NavbarLink({path, icon, caption, selected = false}: {path: string, icon: string, caption: string, selected?: boolean}) {
    return <Link href={path}>
        <div className={[styles.navLink, selected ? styles.selectedLink : undefined].join(" ")}>
            <Image src={icon} height={24} width={24} alt={caption} />
            <span className={styles.linkCaption}>{caption}</span>
        </div>
    </Link>;
}