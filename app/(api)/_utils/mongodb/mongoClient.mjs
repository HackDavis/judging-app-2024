import { MongoClient } from 'mongodb';
// import dotenv from 'dotenv';
// dotenv.config();

const uri = process.env.MONGODB_URI;
let cachedClient = null;

export async function getClient() {
  if (cachedClient) {
    return cachedClient;
  }
  const client = new MongoClient(uri);
  cachedClient = client;
  return cachedClient;
}

export async function getDatabase() {
  const client = await getClient();
  return client.db();
}
