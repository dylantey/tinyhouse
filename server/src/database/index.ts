import { MongoClient } from "mongodb";
import { Database } from '../lib/types';

const url = 
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
export const connectDatabase = async (): Promise<Database> => {
    const client = await MongoClient.connect(url); // removed useNewUrlParser: true, useUnifiedTopology: true 
    // https://stackoverflow.com/questions/68970788/getting-no-overload-matches-this-call-running-mongoose-with-typescript-and-expre

    const db = client.db('main');

    return {
        listings: db.collection("test_listings")
    };
};

