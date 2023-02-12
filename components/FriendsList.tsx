
import React from "react";
import styles from '@/styles/FriendsList.module.css';
import Icon from '@/components/Icon';
import { IconTypes } from "@/components/Icon";

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
                ... friends go here
            </div>
        </>
    );
}