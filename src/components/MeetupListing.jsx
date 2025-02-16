import React from "react";
import { FaDiscord } from "react-icons/fa";

const MeetupListing = ({ meetup }) => {
  return (
    <div class="bg-white rounded-xl shadow-md relative">
        <div class="p-4">
            <div class="mb-6">
                <h3 class="text-xl font-bold mt-5">{meetup.title}</h3>
            </div>
            
            <div class="mb-5">{meetup.description}</div>
            
            <h3 class="text-indigo-500 mb-2">{`${meetup.meetingDate} @ ${meetup.meetingTime} ${meetup.meetingTimeZone}`}</h3>
            
            <FaDiscord class="inline text-orange-700 mb-3 mr-1"/>
                {meetup.createdBy}
            
            <div class="border border-gray-100 mb-5"></div>
            
            <div class="flex flex-col lg:flex-row justify-between mb-4">
                <a href={`/meetup/${meetup.id}`} class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Join
                </a>
            </div>
        </div>
    </div>
  );
};

export default MeetupListing;