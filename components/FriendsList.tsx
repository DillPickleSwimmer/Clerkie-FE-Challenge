import type { Filters } from '@/types/Filters';
import type { FriendType } from '@/types/FriendType';

import Friend from '@/components/Friend';
import FilterPopover from '@/components/FilterPopover';
import FriendShimmer from '@/components/FriendShimmer';
import Error from '@/components/Error';

import styles from '@/styles/FriendsList.module.css';

import React from 'react';
import useWindowDimensions from '@/utils/useWindowDimensions';

const LOAD_MORE_OFFSET = 200;
const ESTIMATED_ROW_HEIGHT = 150;
const DEFAULT_NUM_PAGES = 15;

// Display the list of friends queried from the API & apply filters to them
export default function FriendsList() {
    const [filters, setFilters] = React.useState<Filters>([]);
    const [friends, setFriends] = React.useState<Array<FriendType>>([]);
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [hasMorePages, setHasMorePages] = React.useState(true);
    const [error, setError] = React.useState(false);
    const { height: windowHeight } = useWindowDimensions();

    const friendListRef = React.useRef(null);
    const numPerPage =
        windowHeight != null
            ? Math.max(DEFAULT_NUM_PAGES, Math.ceil(windowHeight / ESTIMATED_ROW_HEIGHT) * 2)
            : DEFAULT_NUM_PAGES;

    // whenever the page changes or the filter changes, we need to make another query for data
    React.useEffect(() => {
        setLoading(true);
        fetch(`/api/friends?page=${page}&numPerPage=${numPerPage}&filters=${JSON.stringify(filters)}`, {
            method: 'GET',
            cache: 'no-cache',
        })
            .then((res) => res.json())
            .then((res) => {
                const newFriends = [...friends];
                // replace the page of friends (in case a double query happens for some reason)
                newFriends.splice((page - 1) * numPerPage, numPerPage, ...res.page);
                setFriends(newFriends);
                setHasMorePages(res.hasMorePages);
            })
            .catch((e) => setError(true))
            .finally(() => setLoading(false));
        // We don't want to query when the friends changes, just when the page changes
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, numPerPage, filters]);

    // query for the next page of data when the friends list is scrolled almost to the bottom
    React.useEffect(() => {
        const friendList = friendListRef.current;

        const onScroll = function () {
            if (friendList == null) return;
            const position = friendList.getBoundingClientRect();
            if (hasMorePages && !loading && position.bottom - LOAD_MORE_OFFSET <= window.innerHeight) {
                setPage(page + 1);
            }
        };
        document.addEventListener('scroll', onScroll, {
            capture: true,
            passive: true,
        });
        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    }, [hasMorePages, loading, page, setPage]);

    // when filter changes, reset the friends and page
    const setFiltersWrapped = React.useCallback((filters) => {
        setFriends([]);
        setPage(1);
        setFilters(filters);
    }, []);

    if (error) {
        return <Error />;
    }

    return (
        <>
            <div className={styles.filters}>
                <span>
                    <FilterPopover
                        clearAllButtonStyle={styles.clearAllFilters}
                        initialFilters={filters}
                        onApply={setFiltersWrapped}
                    />
                </span>
                <span className={styles.clearAllFiltersWrapper}>
                    <button
                        className={styles.clearAllFilters}
                        disabled={filters.length === 0}
                        onClick={() => setFiltersWrapped([])}
                    >
                        Clear all
                    </button>
                </span>
            </div>
            <div
                ref={friendListRef}
                className={styles.friendsList}
            >
                {friends.map((friend, i) => (
                    <Friend
                        key={friend.id + i}
                        friend={friend}
                    />
                ))}
                {loading && new Array(numPerPage).fill(false).map((_, i) => <FriendShimmer key={'shimmer' + i} />)}
                {!hasMorePages && <div className={styles.noMore}>No more friends ☹...</div>}
            </div>
        </>
    );
}
