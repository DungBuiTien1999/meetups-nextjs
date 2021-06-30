import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup
// 8UuS9Q7vXuj8gXy dungbui

async function handler(req, res) {
    if(req.method === 'POST') {
        const data = req.body;

        // const { title, image, address, description } = data;

        const client = await MongoClient.connect("mongodb+srv://dungbui:8UuS9Q7vXuj8gXy@cluster0.mdhcf.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }
}

export default handler;