import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import MeetupListings from "./components/MeetupListings";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <MeetupListings />
    </>
  );
};

export default App;