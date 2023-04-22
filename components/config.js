import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL) // Your API Endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)

export const account = new Account(client);

//Database

export const databases = new Databases(client, process.env.NEXT_PUBLIC_APPWRITE_DATABASE);
