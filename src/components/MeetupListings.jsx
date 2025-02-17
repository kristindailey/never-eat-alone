import React, { useState, useEffect } from "react";
import { appwriteConfig, databases } from "../services/appwrite";
import { useLocation } from "react-router-dom";
import MeetupListing from "./MeetupListing";

const MeetupListings = () => {
  const [meetups, setMeetups] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMeetups = async () => {
      try {
        const response = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.meetupCollectionId);
        console.log(response);
        setMeetups(response.documents);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
  
    getMeetups();
  }, []);

  const getHeading = () => {
    return location.pathname === "/" ? "Upcoming Meetups" : "Browse Meetups";
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {getHeading()}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {meetups.map((meetup) => (
              <MeetupListing key={meetup.$id} meetup={meetup} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default MeetupListings;