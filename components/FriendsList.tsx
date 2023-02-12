
import React from "react";
import styles from '@/styles/FriendsList.module.css';
import Icon from '@/components/Icon';
import { IconTypes } from "@/components/Icon";
import Friend from '@/components/Friend';

enum FriendStatus {
    normal, 
    close,
    superClose
}

type Friend = {
    name: string, 
    email: string, 
    phone: number, 
    status: FriendStatus
}

const MOCK_FRIENDS: Array<Friend> = [
    {
        name: "Sally Cooper",
        email: "sallycooper@gmail.com",
        phone: 4707825471, 
        status: FriendStatus.close
    },
    {
        name: "Judith Gonzalez",
        email: "jgonzalez@gmail.com",
        phone: 1231423123, 
        status: FriendStatus.normal
    },
    {
        name: "George Bryant",
        email: "georgebryant@gmail.com",
        phone: 3932920983, 
        status: FriendStatus.normal
    },
    {
        name: "Betty Wood",
        email: "betty@gmail.com",
        phone: 2730981029, 
        status: FriendStatus.superClose
    },
    {
        name: "Sally Cooper",
        email: "sallycooper@gmail.com",
        phone: 4707825471, 
        status: FriendStatus.close
    },
    {
        name: "Sally Cooper",
        email: "sallycooper@gmail.com",
        phone: 4707825471, 
        status: FriendStatus.close
    },
    {
        name: "Sally Cooper",
        email: "sallycooper@gmail.com",
        phone: 4707825471, 
        status: FriendStatus.close
    },
    {
        name: "Sally Cooper",
        email: "sallycooper@gmail.com",
        phone: 4707825471, 
        status: FriendStatus.close
    },
    {
        name: "Sally Cooper",
        email: "sallycooper@gmail.com",
        phone: 4707825471, 
        status: FriendStatus.close
    },
    {
        name: "Sally Cooper",
        email: "sallycooper@gmail.com",
        phone: 4707825471, 
        status: FriendStatus.close
    },
]

export default function FriendsList() {
    const [filtersOpen, setFiltersOpen] = React.useState(false); 
    const [filters, setFilters] = React.useState([1]);

    return (
        <>
            <div className={styles.filters}>
                <span>
                    <button 
                        className={[styles.filterButton, filtersOpen || filters.length > 0 ? styles.selected : undefined].join(" ")}
                        onClick={() => setFiltersOpen(!filtersOpen)}
                    >
                        <Icon size={20} iconType={IconTypes.filter}/>
                        {filters.length > 0 ? <span>{filters.length}</span> : undefined}
                    </button>
                </span>
                <span className={styles.clearAllFiltersWrapper}>
                    <button 
                        className={styles.clearAllFilters}
                        disabled={filters.length === 0}
                        onClick={() => setFilters([])}
                    >
                        Clear all
                    </button>
                </span>
            </div>
            <div>
                {MOCK_FRIENDS.map((friend, i) => <Friend key={i} friend={friend}/>)}
            </div>
        </>
    );
}