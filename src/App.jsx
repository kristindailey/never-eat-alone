import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import MeetupsPage from "./pages/MeetupsPage";
import MeetupPage from "./pages/MeetupPage";
import AddMeetupPage from "./pages/AddMeetupPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/meetups" element={<MeetupsPage />}/>
      <Route path="/add-meetup" element={<AddMeetupPage />}/>
      <Route path="/profile" element={<ProfilePage />}/>
      <Route path="/meetups/:id" element={<MeetupPage />}/>
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