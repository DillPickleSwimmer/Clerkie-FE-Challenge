import MOCK_FRIENDS from '../mock_friends.json';

// Get list of friends by page (with optional filter)
export default function handler(req, res) {
    if (req.method === 'GET') {
        const { id } = req.query;
        const friend = MOCK_FRIENDS.find((friend) => friend.id === id);

        console.log(id);
        console.log(friend);

        if (friend == null) {
            res.status = 404;
            res.send();
        }

        res.status = 200;
        res.send(JSON.stringify(friend));
    }

    res.status = 400;
    res.send();
}
