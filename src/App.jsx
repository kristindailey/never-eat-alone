import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import MeetupListings from "./components/MeetupListings";
import ViewAllMeetups from "./components/ViewAllMeetups";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <MeetupListings />
      <ViewAllMeetups />
    </>
  );
};

export default App;