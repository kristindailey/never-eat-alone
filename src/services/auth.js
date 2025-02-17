import { ID } from "appwrite";
import { account } from "./appwrite";

export const authService = {
    // Create a new account
    async createAccount(email, password) {
        try {
            const response = await account.create(
                ID.unique(),
                email, 
                password
            );
            return response;
        } catch (error) {
            console.error("Failed to create an account:", error);
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
            console.error("Failed to get current user:", error);
        }
    },
    // Logout user
    async logout(email, password) {
        try {
            await account.deleteSession("current");
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    },
};