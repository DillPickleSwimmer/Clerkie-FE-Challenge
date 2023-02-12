import React from 'react';
import styles from '@/styles/Popover.module.css';
import Icon from '@/components/Icon';
import { IconTypes } from './Icon';

type Props = {
    children: React.ReactNode,
    header?: {
        title: string, 
        left?: React.ReactNode
    }
    onClose: () => void, 
};

export default function Popover({children, header, onClose}: Props) {
    // add listeners for click outside of component / scroll to close the filters
    const ref = React.useRef(null); 
    React.useEffect(() => {
        function handleOutside(event) {
            if(ref.current && !ref.current.contains(event.target)) {
                onClose(); 
            }
        }

        document.addEventListener("mousedown", handleOutside, {once: true, passive: true});
        document.addEventListener("scroll", handleOutside, {once: true, capture: true, passive: true});

        return () => {
            document.removeEventListener("mousedown", handleOutside);
            document.removeEventListener("scroll", handleOutside);
        }
    }, [ref, onClose]);

    return (
        <div className={styles.popover} ref={ref}>
            {header && <div className={styles.header}>
                <span>{header.left}</span>
                <span className={styles.title}>{header.title}</span>
                <span><button onClick={onClose}><Icon iconType={IconTypes.close} size={17} /></button></span>
            </div>}
            <div className={styles.content}>{children}</div>
        </div>
    )
}