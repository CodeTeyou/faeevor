import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";

configDotenv();

const MONGODB_AUTH = process.env.MONGODB_AUTH;

if (!MONGODB_AUTH) {
  throw new Error("MONGODB_AUTH environment variable is not defined");
}

const client = new MongoClient(MONGODB_AUTH);

export async function connectToMongoDB(): Promise<MongoClient> {
  try {
    await client.connect();

    console.log("Successfully connected to MongoDB!");

    return client;
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    throw err;
  }
}

// Call this only when your application terminates
export async function disconnectFromMongoDB(): Promise<void> {
  await client.close();
  console.log("MongoDB connection closed.");
}
