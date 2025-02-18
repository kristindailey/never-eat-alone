import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/images/logo.png";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const linkClass = ({ isActive }) => isActive ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2" : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Logout failed", error);
        }  
    };

    return (
        <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                            <img className="h-10 w-auto" src={logo} alt="Never Eat Alone"/>
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">Never Eat Alone</span>
                        </NavLink>
                
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                <NavLink to="/" className={linkClass}>Home</NavLink>
                                <NavLink to="/meetups" className={linkClass}>Meetups</NavLink>
                                <NavLink to="/add-meetup" className={linkClass}>Add Meetup</NavLink>
                                {user ? (
                                    <button onClick={handleLogout} className="text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2">Logout</button>
                                ) : (
                                    <NavLink to="/login" className={linkClass}>Login</NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;