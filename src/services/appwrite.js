import { Client, Databases, Account, ID } from "appwrite";

const appwriteConfig = {
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
    projectId: import.meta.env.VITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_DATABASE_ID,
    userCollectionId: import.meta.env.VITE_USER_COLLECTION_ID,
    meetupCollectionId: import.meta.env.VITE_MEETUP_COLLECTION_ID,
};
  
const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

export const databases = new Databases(client);
export const account = new Account(client);

export { appwriteConfig, ID };