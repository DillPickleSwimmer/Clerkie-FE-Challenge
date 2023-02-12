
import type { FriendType } from '@/components/Friend';
import type {Filters} from '@/components/FilterPopover';

import React from "react";
import styles from '@/styles/FriendsList.module.css';
import Icon from '@/components/Icon';
import { IconTypes } from "@/components/Icon";
import Friend, {FriendStatus} from '@/components/Friend';
import Popover from "./Popover";
import FilterPopover from "@/components/FilterPopover";
import FriendShimmer from '@/components/FriendShimmer';

const LOAD_MORE_OFFSET = 200;

// This delay isn't really needed, I just added it so we can see the loading shimmer (otherwise it loads too fast)
const LOAD_DELAY = 500;

export default function FriendsList() {
    const [filtersOpen, setFiltersOpen] = React.useState(false); 
    const [filters, setFilters] = React.useState<Filters>([]);
    const numFiltersSelected = filters.length; 

    const numPerPage = 10;
    const [friends, setFriends] = React.useState([]);
    const friendListRef = React.useRef(null);
    const [page, setPage] = React.useState(1); 
    const [loading, setLoading] = React.useState(false);
    const [hasMorePages, setHasMorePages] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        fetch(`/api/friends?page=${page}&numPerPage=${numPerPage}&filters=${filters}`, {method: 'GET'})
            .then(res => res.json())
            .then(res => {
                setTimeout(() => {
                    setFriends([...friends, ...res.page]);
                    setHasMorePages(res.hasMorePages);
                }, LOAD_DELAY);
            })
            .catch(e => console.log(e))
            .finally(() => setTimeout(() => setLoading(false), LOAD_DELAY));
    // We don't want to query when the friends changes, just when the page changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    React.useEffect(() => {
        const friendList = friendListRef.current;

        const onScroll = function() {
            const position = friendList.getBoundingClientRect();
            if(hasMorePages && !loading && position.bottom - LOAD_MORE_OFFSET <= window.innerHeight) {
                setPage(page + 1);
            }
        }
        document.addEventListener('scroll', onScroll, {capture: true, passive: true});
        return () => document.removeEventListener('scroll', onScroll);
    }, [hasMorePages, loading, page, setPage]);

    return (
        <>
            <div className={styles.filters}>
                <span>
                    <button 
                        className={[styles.filterButton, filtersOpen || numFiltersSelected > 0 ? styles.selected : undefined].join(" ")}
                        onClick={() => setFiltersOpen(!filtersOpen)}
                    >
                        <Icon size={20} iconType={IconTypes.filter}/>
                        {numFiltersSelected > 0 ? <span>{numFiltersSelected}</span> : undefined}
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
            {filtersOpen && <div>
                <FilterPopover 
                    clearAllButtonStyle={styles.clearAllFilters} 
                    initialFilters={filters}
                    onClose={() => setFiltersOpen(false)} 
                    onApply={setFilters}
                />
            </div>}
            <div ref={friendListRef}>
                {friends.map((friend, i) => <Friend key={i} friend={friend}/>)}
                {loading && new Array(numPerPage).fill(false).map((_, i) => <FriendShimmer key={'shimmer' + i}/>)}
                {!hasMorePages && <div className={styles.noMore}>No more friends ☹...</div>}
            </div>
        </>
    );
}