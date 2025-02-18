import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { toast } from "react-toastify";
import JoinMeetup from "./JoinMeetup";

const MeetupListing = ({ meetup, currentUser }) => {
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <h3 className="text-xl font-bold mt-5">{meetup.title}</h3>
                </div>
                
                <div className="mb-5">{meetup.description}</div>
                
                <h3 className="text-indigo-500 mb-2">{`${meetup.meetingDate} @ ${meetup.meetingTime} ${meetup.meetingTimeZone}`}</h3>
                
                <div className="mb-2">
                    <FaDiscord className="inline text-blue-500 mr-1"/>
                    <p className="inline text-blue-500 ml-1">{meetup.discordName}</p>
                </div>
                
                <div className="border border-gray-100 mb-5"></div>
                
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    {currentUser ? (
                        currentUser.$id === meetup.createdBy ? (
                            <Link to={`/edit-meetup/${meetup.$id}`} className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                                Edit
                            </Link>
                        ) : (
                            <JoinMeetup meetup={meetup} onJoin={(meetupId) => {
                                toast.success("Thanks for joining the meetup!");
                            }}/>                   )
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default MeetupListing;