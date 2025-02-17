import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { databases, appwriteConfig, ID } from "../services/appwrite";

const AddMeetupPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingTimeZone, setMeetingTimeZone] = useState("");
  const [discordName, setDiscordName] = useState("");

  const navigate = useNavigate();

  const addMeetup = async (e) => {
    e.preventDefault();

    const newMeetup = {
      title,
      description,
      meetingDate,
      meetingTime,
      meetingTimeZone,
      discordName,
    };

    await databases.createDocument(
      appwriteConfig.databaseId, 
      appwriteConfig.meetupCollectionId,
      ID.unique(), 
      newMeetup
    );

    toast.success("Meetup added successfully.");

    return navigate("/meetups");
};

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={addMeetup}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Meetup</h2>

            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Meetup Listing Name</label>
              <input type="text" id="title" name="title" className="border rounded w-full py-2 px-3 mb-2" placeholder="e.g., Banki Over Lunch" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea id="description" name="description" className="border rounded w-full py-2 px-3" rows="4" placeholder="List your intention (e.g., get to know each other, study, interview prep, etc.) and anything you might want to discuss over lunch." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div className='mb-4'>
              <label htmlFor="meeting_date" className='block text-gray-700 font-bold mb-2'>
                Meeting Date
              </label>
              <input type='text' id='meeting_date' name='meeting_date' className='border rounded w-full py-2 px-3 mb-2' placeholder='e.g., March 31, 2025' required value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)}/>
            </div>

            <div className="mb-4">
              <label htmlFor="meeting_time" className="block text-gray-700 font-bold mb-2">Meeting Time</label>
              <input type="text" id="meeting_time" name="meeting_time" className="border rounded w-full py-2 px-3" placeholder="e.g., 12:00 PM" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)}/>
            </div>

            <div className="mb-4">
              <label htmlFor="meeting_timezone" className="block text-gray-700 font-bold mb-2">Your Time Zone</label>
              <input type="text" id="meeting_timezone" name="meeting_timezone" className="border rounded w-full py-2 px-3" placeholder="e.g., PST" required value={meetingTimeZone} onChange={(e) => setMeetingTimeZone(e.target.value)}/>
            </div>

            <div className="mb-4">
              <label htmlFor="discord_name" className="block text-gray-700 font-bold mb-2">Discord Name</label>
              <input type="text" id="discord_name" name="discord_name" className="border rounded w-full py-2 px-3" placeholder="Discord username" required value={discordName} onChange={(e) => setDiscordName(e.target.value)}/>
            </div>

            <div>
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit">
                Add Meetup
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddMeetupPage;