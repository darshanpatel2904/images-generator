import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("") // Your API Endpoint
  .setProject("");

export const account = new Account(client);

//Database

export const databases = new Databases(client, "");
