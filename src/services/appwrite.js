import { Client, Databases, ID } from "appwrite";

const appwriteConfig = {
    endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
    projectId: import.meta.env.VITE_PROJECT_ID,
    databaseId: import.meta.env.VITE_DATABASE_ID,
    userCollectionId: import.meta.env.VITE_USER_COLLECTION_ID,
    postCollectionId: import.meta.env.VITE_POST_COLLECTION_ID,
  };
  
const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

export const databases = new Databases(client);

const promise = databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.userCollectionId,
    appwriteConfig.postCollectionId,
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then((response) => {
    console.log(response);
}, (error) => {
    console.log(error);
});