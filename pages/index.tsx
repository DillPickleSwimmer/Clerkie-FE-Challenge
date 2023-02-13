import PageLayout from '@/components/PageLayout';

import React from 'react';

// Home page
export default function Home() {
    return (
        <PageLayout title="Home">
            <h1>Hi!</h1>
            <p>Thanks for checking out my Clerkie Frontend Challenge.</p>
            <h3>Tips</h3>
            <ul>
                <li>To simulate en error on the friends list:</li>
                <li>To simulate a slower request (in order to see the friend loading animations):</li>
            </ul>
        </PageLayout>
    );
}
