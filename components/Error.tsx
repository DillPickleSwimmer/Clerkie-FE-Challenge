import Icon, { IconTypes } from '@/components/Icon';

import styles from '@/styles/Error.module.css';

import React from 'react';

export default function Error() {
    return (
        <div className={styles.error}>
            <span className={styles.errorIcon}>
                <Icon
                    iconType={IconTypes.error}
                    size={24}
                />
            </span>
            <span>Sorry, something went wrong. Please refresh the page to try again.</span>
        </div>
    );
}
