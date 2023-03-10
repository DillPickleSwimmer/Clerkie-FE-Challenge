import React from 'react';
import styles from '@/styles/Popover.module.css';
import Icon from '@/components/Icon';
import { IconTypes } from './Icon';
import memoWithPropsObj from '@/utils/memoWithPropsObj';

type Props = {
    children: React.ReactNode;
    header?: {
        title: string;
        left?: React.ReactNode;
    };
    initOpen?: boolean;
    trigger: React.ReactNode;
    onClose?: () => void;
    onOpen?: () => void;
};

// Generic popover component
function Popover({ children, header, trigger, initOpen, onClose, onOpen }: Props) {
    const [open, setOpen] = React.useState(initOpen);
    const ref = React.useRef(null);
    const triggerRef = React.useRef(null);

    // add listeners for click / scroll outside of component to close the filters
    React.useEffect(() => {
        function handleOutside(event) {
            if (
                ref.current &&
                !ref.current?.contains(event.target) &&
                triggerRef.current &&
                !triggerRef?.current.contains(event.target)
            ) {
                setOpen(false);
            }
        }

        document.addEventListener('click', handleOutside, {
            capture: true,
            passive: true,
        });
        document.addEventListener('scroll', handleOutside, {
            once: true,
            capture: true,
            passive: true,
        });

        return () => {
            document.removeEventListener('click', handleOutside);
            document.removeEventListener('scroll', handleOutside);
        };
    }, [setOpen]);

    // call parent callbacks when the popover opens/closes
    React.useEffect(() => {
        if (open) {
            onOpen && onOpen();
        } else {
            onClose && onClose();
        }
    }, [onClose, onOpen, open]);

    // Allow parent to trigger modal closure
    React.useEffect(() => {
        initOpen == false && open == true && setOpen(initOpen);
        // Only want to update the open status if the parent changed it
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initOpen]);

    return (
        <>
            <div
                onClick={() => setOpen(!open)}
                ref={triggerRef}
            >
                {trigger}
            </div>
            {open && (
                <div
                    className={styles.popover}
                    ref={ref}
                >
                    {header && (
                        <div className={styles.header}>
                            <span>{header.left}</span>
                            <span className={styles.title}>{header.title}</span>
                            <span>
                                <button onClick={() => setOpen(false)}>
                                    <Icon
                                        iconType={IconTypes.close}
                                        size={17}
                                    />
                                </button>
                            </span>
                        </div>
                    )}
                    <div className={styles.content}>{children}</div>
                </div>
            )}
        </>
    );
}

export default memoWithPropsObj(Popover);
