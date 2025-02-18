import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "../services/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            setLoading(true);
            const currentUser = await authService.getCurrentUser();
            setUser(currentUser);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            setLoading(true);
            await authService.login(email, password);
            const currentUser = await authService.getCurrentUser();
            setUser(currentUser);
            return currentUser;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            await authService.logout();
            setUser(null);
        } catch (error) {
            console.error("Logout error:", error);
            throw(error);
        } finally {
            setLoading(false);
        }
    };

    const register = async (email, password) => {
        try {
            setLoading(true);
            await authService.createAccount(email, password);
            const currentUser = await login(email, password);
            return currentUser;
        } catch (error) {
            console.error("Registration error:", error);
            throw (error);
        } finally {
            setLoading(false);
        }
    };

    const value = {
        user, 
        isLoading: loading,
        login,
        logout,
        register,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};