import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData.email, formData.password);
      toast.success("Login successfull!");
      navigate("/");
    } catch (error) {
      console.error("Failed to login:", error);
      toast.error("Failed to login");
    }
  };

  return (
    <div className="flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center mb-6">
              Login
            </h2>

            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded w-full py-2 px-3" required/>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="border rounded w-full py-2 px-3" required/>
            </div>

            <div className="flex flex-col gap-5">
              <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"};
              </button>

              <p>
                No account?
                <Link to="/register" className="text-indigo-700 ml-1">Register.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default LoginPage;