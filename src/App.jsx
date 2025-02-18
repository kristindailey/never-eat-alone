import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MeetupsPage from "./pages/MeetupsPage";
import AddMeetupPage from "./pages/AddMeetupPage";
import EditMeetupPage from "./pages/EditMeetupPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      {/* Public routes */}
      <Route element={<PublicRoute />}>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Route>

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/meetups" element={<MeetupsPage />}/>
        <Route path="/add-meetup" element={<AddMeetupPage />}/>
        <Route path="/edit-meetup/:id" element={<EditMeetupPage />}/>
        <Route path="/profile" element={<ProfilePage />}/>
      </Route>

      <Route path="*" element={<NotFoundPage />}/>
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
};

export default App;