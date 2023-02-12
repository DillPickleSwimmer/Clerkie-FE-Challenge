
import React from "react";
import FriendsList from "@/components/FriendsList";
import PageLayout from "@/components/PageLayout";

export default function FriendsPage() {
    return <PageLayout title="Friends">
        <FriendsList />
    </PageLayout>;
}