import Icon, { IconTypes } from '@/components/Icon';

import styles from '@/styles/SearchBar.module.css';

import React from 'react';

type Props = {
    onChange: (text: string) => void;
};

export default function SearchBar({ onChange }: Props) {
    const [searchText, setSearchText] = React.useState('');

    const onChangeCallback = (e) => {
        setSearchText(e.target.value);
        onChange(e.target.value);
    };

    return (
        <div className={styles.searchBar}>
            <Icon
                iconType={IconTypes.search}
                size={16}
            />
            <input
                className={styles.searchInput}
                type="text"
                placeholder="Search"
                onChange={onChangeCallback}
                value={searchText}
            />
        </div>
    );
}
