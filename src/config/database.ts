import { MongoClient, Db } from "mongodb";

let db: Db;

export const createConnection = async () => {
  const { MONGO_URI, MONGO_DATABASE } = process.env;

  if (!MONGO_DATABASE || !MONGO_URI) {
    throw new Error("Invalid variables MONGO_DATABASE or MONGO_URI");
  }

  if (db) {
    throw Error("A connection already exists");
  }

  const client = await MongoClient.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db = client.db(MONGO_DATABASE);

  return async () => await client.close();
};

export const getConnection = () => {
  if (!db) {
    throw Error("DB not initialized");
  }

  return db;
};
