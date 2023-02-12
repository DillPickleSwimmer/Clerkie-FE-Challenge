import FriendsList from "@/components/FriendsList";
import PageLayout from "@/components/PageLayout";

import React from "react";

// Friends list page
export default function FriendsPage() {
    return (
        <PageLayout title="Friends">
            <FriendsList />
        </PageLayout>
    );
}
