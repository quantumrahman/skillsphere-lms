import { MongoClient } from "mongodb";

const db_uri = process.env.DB_URI.replace('<db_password>', process.env.DB_PASS);

export const client = new MongoClient(db_uri);
export const db = client.db("skillsphere-auth");
