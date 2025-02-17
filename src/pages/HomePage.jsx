import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import MeetupListings from "../components/MeetupListings";
import ViewAllMeetups from "../components/ViewAllMeetups";

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <MeetupListings />
        <ViewAllMeetups />
    </>
  );
};

export default HomePage;