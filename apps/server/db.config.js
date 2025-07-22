import { MongoClient } from 'mongodb';
import ENV from "./Env.js";

// const uri = `mongodb://${ENV.DB_USER}:${ENV.DB_PASSWORD}@localhost:27017/${ENV.DATABASE}?maxPoolSize=2-&w=majority`;
const uri = ENV.ModeOfDevelopment === "Production" ? ENV.MongoDB_Host : ENV.MongoDB_Debug_Host;

const client = new MongoClient(uri);

const init = async () => {
    try {
        await client.connect();
        console.log("Connected");
    } catch (error) {
        console.log(error);
    }
};

const getClient = () => {
    return client;
};

export default {
    init,
    getClient
}