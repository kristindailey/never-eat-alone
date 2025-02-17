import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddMeetupPage from "./pages/AddMeetupPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
// import EditMeetupPage from "./pages/EditMeetupPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path="/add-meetup" element={<AddMeetupPage />}/>
      {/* <Route path='/edit-meetup/:id' element={<EditJobPage />} /> */}
      <Route path="/profile" element={<ProfilePage />}/>
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