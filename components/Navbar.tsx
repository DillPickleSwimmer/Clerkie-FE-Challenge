import Icon, { IconTypes } from "./Icon";

import styles from "@/styles/Navbar.module.css";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// The navigation bar to the left of the screen to navigate between pages
export default function Navbar() {
  const router = useRouter();
  const selectedPath = router.pathname;

  return (
    <div className={styles.navbar}>
      <div className={styles.title}>
        <Icon iconType={IconTypes.logo} size={20} color="none" />
        <span className={styles.titleCaption}>Clerkie Challenge</span>
      </div>
      <nav className={styles.nav}>
        <NavbarLink
          path="/"
          icon={IconTypes.home}
          caption="Home"
          selected={selectedPath === "/"}
        />
        <NavbarLink
          path="/friends"
          icon={IconTypes.friends}
          caption="Friends"
          selected={selectedPath?.startsWith("/friends")}
        />
      </nav>
    </div>
  );
}

// The individial links in the navigation bar
function NavbarLink({
  path,
  icon,
  caption,
  selected = false,
}: {
  path: string;
  icon: IconTypes;
  caption: string;
  selected?: boolean;
}) {
  return (
    <Link href={path}>
      <div
        className={[
          styles.navLink,
          selected ? styles.selectedLink : undefined,
        ].join(" ")}
      >
        <Icon iconType={icon} size={24} />
        <span className={styles.linkCaption}>{caption}</span>
      </div>
    </Link>
  );
}
