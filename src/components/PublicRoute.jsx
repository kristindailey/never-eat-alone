import React, { useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Spinner from "./Spinner";

const PublicRoute = () => {
    const { isLoading, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!isLoading && user && location.pathname !== "/") {
            navigate("/meetups");
        }
    }, [isLoading, user, navigate, location]);

    if (isLoading) {
        return <Spinner />;
    }

    return <Outlet />;
};

export default PublicRoute;