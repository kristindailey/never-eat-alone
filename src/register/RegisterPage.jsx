import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { register, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = () => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      await register(formData.email, formData.password);
      toast.success("Registration successful!");
      navigate("/");
    } catch (error) {
      console.error("Failed to register:", error);
      toast.error("Failed to register.");
    }
  };

  return (
    <div className="flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm mt-20">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Register
            </h2>

            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border rounded w-full py-2 px-3" required/>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded w-full py-2 px-3" required/>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="border rounded w-full py-2 px-3" required/>
            </div>

            <div className="mb-6">
              <label htmlFor="confirm-password" className="block font-bold mb-2">Confirm Password</label>
              <input type="password" id="confirm-password" name="confirm-password" value={formData.confirmPassword} onChange={handleChange} className="border rounded w-full py-2 px-3" required/>
            </div>

            <div className="flex flex-col gap-5">
              <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600" disabled={isLoading}>
                {isLoading ? "Registering..." : "Register"}
              </button>

              <p>
                Have an account?
                <Link to="/login" className="text-indigo-700 ml-1">Log in.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
  );
};

export default RegisterPage;