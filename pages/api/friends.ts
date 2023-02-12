import { url } from 'inspector';
import type { NextRequest } from 'next/server';

import MOCK_FRIENDS from './mock_friends.json';

export const config = {
    runtime: 'edge',
};

export default function handler(req: NextRequest) {
    if(req.method === "GET") {
        const { searchParams } = new URL(req.url)
        const page = parseInt(searchParams.get('page'));
        const numPerPage = parseInt(searchParams.get('numPerPage'));
        const filters = JSON.parse(searchParams.get('filters'));

        const filteredFriends = filters.length > 0 ? MOCK_FRIENDS.filter(friend => filters.some(filter => filter === friend.status)) : MOCK_FRIENDS;

        return new Response(
            JSON.stringify({
                hasMorePages: (page * numPerPage) <= filteredFriends.length,
                page: filteredFriends.slice((page - 1) * numPerPage, page * numPerPage)
            }), 
            {
                status: 200, 
                headers: {
                    'content-type': 'application/json'
                }
            }
        )
    }
    return new Response(null, {status: 400});
}