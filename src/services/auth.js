import { ID } from "appwrite";
import { account, databases, appwriteConfig } from "./appwrite";
import { BsDisplay } from "react-icons/bs";

export const authService = {
    // Create a new account
    async createAccount(email, password) {
        try {
            const authUser = await account.create(
                ID.unique(),
                email, 
                password
            );

            await databases.createDocument(
                appwriteConfig.databaseId,
                appwriteConfig.userCollectionId,
                authUser.$id,
                {
                    displayName: name,
                    email: email,
                    bio: "",
                    avatarUrl: ""
                }
            );
            return authUser;
        } catch (error) {
            console.error("Failed to create an account:", error);
            throw error;
        }
    },
    // Login user
    async login(email, password) {
        try {
            const session = await account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            console.error("Failed to login:", error);
        }
    },
    // Get current user
    async getCurrentUser() {
        try {
            return await account.get();
        } catch (error) {
            if (error.code === 401) {
                return null;
            }
            console.error("Failed to get current user:", error);
            throw error;
        }
    },
    // Logout user
    async logout() {
        try {
            await account.deleteSession("current");
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    },
    // Get user's database profile
    async getUserProfile(useId) {
        try {
            return await databases.getDocument(
                appwriteConfig.databaseId,
                appwriteConfig.userCollectionId,
                userId
            );
        } catch (error) {
            console.error("Failed to get user profile:", error);
            throw error;
        }
    },
};