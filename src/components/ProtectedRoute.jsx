import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Spinner from "./Spinner";

const ProtectedRoute = () => {
    const { isLoading, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    if (isLoading) {
        return <Spinner />;
    }

    return user ? <Outlet /> : null;
}

export default ProtectedRoute;