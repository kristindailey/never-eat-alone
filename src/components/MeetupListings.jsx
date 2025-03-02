import React, { useState, useEffect } from "react";
import { appwriteConfig, databases } from "../services/appwrite";
import { useLocation } from "react-router-dom";
import { authService } from "../services/auth";
import MeetupListing from "./MeetupListing";
import Spinner from "./Spinner";

const MeetupListings = () => {
  const [meetups, setMeetups] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        const [meetupsResponse, user] = await Promise.all([
          databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.meetupCollectionId),
          authService.getCurrentUser()
        ]);
        setMeetups(meetupsResponse.documents);
        setCurrentUser(user);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
  
    initializeData();
  }, []);

  const getHeading = () => {
    return location.pathname === "/" ? "Upcoming Meetups" : "Browse Meetups";
  };

  const getDisplayedMeetups = () => {
    return location.pathname === "/" ? meetups.slice(0, 3) : meetups;
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {getHeading()}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getDisplayedMeetups().map((meetup) => (
                <MeetupListing key={meetup.$id} meetup={meetup} currentUser={currentUser} />
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MeetupListings;