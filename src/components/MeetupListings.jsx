import React from "react";
import MeetupListing from "./MeetupListing";
// import meetups collection somehow
// ensure that meetups is an array/can use slice
// check map loop

const MeetupListings = () => {
  const recentMeetups = meetups.slice(0, 3);

  return (
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Meetups
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentMeetups.map((meetup) => (
              <MeetupListing key={meetup.id} meetup={meetup} />
            ))}
        </div>
      </div>
    </section>
  )
};

export default MeetupListings;