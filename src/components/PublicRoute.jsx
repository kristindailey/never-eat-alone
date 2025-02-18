import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Spinner from "./Spinner";

const PublicRoute = () => {
    const { isLoading, user } = useAuth();

    if (isLoading) {
        return <Spinner />;
    }

    if (user) {
        return <Navigate to="/meetups" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;