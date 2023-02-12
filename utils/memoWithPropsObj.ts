import next from 'next';
import type { FunctionComponent } from 'react';
import { memo } from 'react';

function propsObjEquality(prevProps, nextProps): boolean {
    if (typeof prevProps !== 'object' || typeof nextProps !== 'object') {
        return prevProps === nextProps;
    }

    const keys1 = Object.keys(prevProps);
    const keys2 = Object.keys(nextProps);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (prevProps[key] !== nextProps[key]) {
            return false;
        }
    }
    return true;
}

export default function memoWithPropsObj<Props>(el: FunctionComponent<Props>) {
    return memo(el, propsObjEquality);
}
