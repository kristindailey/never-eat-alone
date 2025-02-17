import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MeetupsPage from "./pages/MeetupsPage";
import AddMeetupPage from "./pages/AddMeetupPage";
import EditMeetupPage from "./pages/EditMeetupPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./login/LoginPage";
import RegisterPage from "./register/RegisterPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/meetups" element={<MeetupsPage />}/>
      <Route path="/add-meetup" element={<AddMeetupPage />}/>
      <Route path="/edit-meetup/:id" element={<EditMeetupPage />}/>
      <Route path="/profile" element={<ProfilePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="*" element={<NotFoundPage />}/>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;