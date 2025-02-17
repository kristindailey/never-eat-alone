// import { databases, appwriteConfig } from "./appwrite";

// export const meetupServices = {
//     // Get all meetups
//     getMeetups: async () => {
//         try {
//             const response = await databases.listDocuments(
//                 appwriteConfig.databaseId,
//                 appwriteConfig.meetupCollectionId,
//             );
//             return response.documents;
//         } catch (error) {
//             console.error("Error fetching meetups:", error);
//             throw error;
//         }
//     },
    // Create single meetup
    // createMeetup: async (meetupData) => {
    //     try {
    //         return await databases.createDocument(
    //             appwriteConfig.databaseId,
    //             appwriteConfig.meetupCollectionId,
    //             ID.unique(),
    //             meetupData,
    //         );
    //     } catch (error) {
    //         console.error("Error creating meetup:", error);
    //         throw error;            
    //     }
    // },
// };