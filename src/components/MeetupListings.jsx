import React, { useState, useEffect } from "react";
import MeetupListing from "./MeetupListing";
// import { meetupServices } from "../services/meetupServices";

const MeetupListings = () => {
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Meetups
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {meetups.map((meetup) => (
              <MeetupListing key={meetup.id} meetup={meetup} />
            ))}
        </div>
      </div>
    </section>
  )
};

export default MeetupListings;