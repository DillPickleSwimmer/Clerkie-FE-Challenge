import PageLayout from '@/components/PageLayout';

import styles from '@/styles/Home.module.css';

import React from 'react';
import Image from 'next/image';

// Home page
export default function Home() {
    return (
        <PageLayout title="Home">
            <div className={styles.home}>
                <h1>Hi!</h1>
                <div>
                    <p>Thanks for checking out my Clerkie Frontend Challenge.</p>
                </div>
                <h3>Tips</h3>
                <div>
                    <p>To simulate a slower request (in Chrome) (in order to see the friend loading animations):</p>
                    <ol>
                        <li>Inspect the page {'([right click] > inspect)'}</li>
                        <li>
                            Select the <i>Network tab</i> (on the top bar)
                        </li>
                        <li>
                            On the 2nd bar from the top, select <i>No throttling</i> and change it to the <i>Slow 3G</i>{' '}
                            preset
                        </li>
                        <li>The browser will now simulate a slow network request</li>
                    </ol>
                    <Image
                        src="/slowNetwork.gif"
                        alt="Slow network demo"
                        width={800}
                        height={660}
                    />
                </div>
                <div>
                    <p>To simulate en error on the friends list (in Chrome):</p>
                    <ol>
                        <li>Inspect the page</li>
                        <li>
                            If the console drawer is not open, press <i>Esc</i> to toggle it{' '}
                        </li>
                        <li>
                            Click the tripple dots in the console drawer and select <i>Network Request Blocking</i>
                        </li>
                        <li>
                            Add this url to the blocked requests:
                            <i>https://clerkie-fe-challenge-a6onb8nts-dillpickleswimmer.vercel.app/api/friends*</i>
                        </li>
                        <li>Errors should now occur if you try to use / load more friends </li>
                    </ol>
                    <Image
                        src="/error.gif"
                        alt="Error demo"
                        width={800}
                        height={660}
                    />
                </div>
            </div>
        </PageLayout>
    );
}
