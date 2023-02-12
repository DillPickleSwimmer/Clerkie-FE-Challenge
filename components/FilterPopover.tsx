import React from 'react';
import Popover from '@/components/Popover';
import {FriendStatus} from '@/components/Friend';
import styles from '@/styles/FilterPopover.module.css';

const FILTERS: Array<[FriendStatus, string]> = [
    [FriendStatus.close, "Close Friends"], 
    [FriendStatus.superClose, "Really Close Friends"],
];

export type Filters = Array<FriendStatus>
type Props = {
    clearAllButtonStyle: string, 
    initialFilters: Filters
    onClose: () => void, 
    onApply: (filters: Filters) => void 
}

// TODO: make the checkmark match

export default function FilterPopover({clearAllButtonStyle, initialFilters, onClose, onApply}: Props) {
    const [filters, setFilters] = React.useState(initialFilters);

    return (
        <Popover 
            header={{
                title: 'Filter',
                left: <button className={clearAllButtonStyle} disabled={filters.length === 0} onClick={() => setFilters([])}>Clear all</button>
            }} 
            onClose={onClose}
        >
            <>
                <div className={styles.filterPopoverContent}>
                    <div className={styles.filterTitle}>Friend Status</div>
                    {FILTERS.map(([status, label], i) => (
                        <div key={i} className={styles.filter}>
                            <label htmlFor={status.toString()}>{label}</label>
                            <input 
                                id={status.toString()} 
                                type="checkbox" 
                                checked={filters.some(f => f === status)}
                                onChange={(e) => {
                                    if(e.target.checked) {
                                        setFilters([...filters, status])
                                    } else {
                                        setFilters([...filters].filter(f => f !== status))
                                    }
                                }}
                            />
                        </div>
                    ))}
                </div>
                <button 
                    className={styles.applyButton}
                    onClick={() => {
                        onApply(filters);
                        onClose();
                    }}
                >Apply</button>
            </>
        </Popover>
    );
}