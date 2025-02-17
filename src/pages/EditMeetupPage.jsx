import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { databases, appwriteConfig } from "../services/appwrite"
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const EditMeetupPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [meetingDate, setMeetingDate] = useState("");
    const [meetingTime, setMeetingTime] = useState("");
    const [meetingTimeZone, setMeetingTimeZone] = useState("");
    const [discordName, setDiscordName] = useState("");

    useEffect(() => {
        const fetchMeetup = async () => {
            try {
                const meetup = await databases.getDocument(
                    appwriteConfig.databaseId,
                    appwriteConfig.meetupCollectionId,
                    id
                );

                setTitle(meetup.title);
                setDescription(meetup.description);
                setMeetingDate(meetup.meetingDate);
                setMeetingTime(meetup.meetingTime);
                setMeetingTimeZone(meetup.meetingTimeZone);
                setDiscordName(meetup.discordName);
            } catch (error) {
                console.error("Error fetching meetup:", error);
                toast.error("Failed to retrieve meetup details.");
                navigate("/meetups");
            } finally {
                setLoading(false);
            }
        };

        fetchMeetup();
    }, [id, navigate]);

    const updateMeetup = async (e) => {
        e.preventDefault();

        try {
            const updatedMeetup = {
                title,
                description,
                meetingDate,
                meetingTime,
                meetingTimeZone,
                discordName,
            };

            await databases.updateDocument(
                appwriteConfig.databaseId, 
                appwriteConfig.meetupCollectionId,
                id, 
                updatedMeetup,
                discordName
            );

            toast.success("Meetup updated successfully.");
            
            navigate("/");
        } catch (error) {
            console.error("Error updating meetup", error);
            toast.error("Failed to update meetup.");
        }
    };

    const deleteMeetup = async (e) => {
        e.preventDefault();

        try {
            await databases.deleteDocument(
                appwriteConfig.databaseId,
                appwriteConfig.meetupCollectionId,
                id
            );

            toast.success("Meetup deleted successfully.");
            navigate("/");
        } catch (error) {
            console.error("Error deleting meetup:", error);
            toast.error("Failed to delete meetup.");
        }
    };

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-24">
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <form>
                            <h2 className="text-3xl text-center font-semibold mb-6">Update Meetup</h2>

                            <div className="mb-4">
                                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Meetup Listing Name</label>
                                <input type="text" id="title" name="title" className="border rounded w-full py-2 px-3 mb-2" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                                <textarea id="description" name="description" className="border rounded w-full py-2 px-3" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="meeting_date" className="block text-gray-700 font-bold mb-2">
                                    Meeting Date
                                </label>
                                <input type="text" id="meeting_date" name="meeting_date" className="border rounded w-full py-2 px-3 mb-2" required value={meetingDate} onChange={(e) => setMeetingDate(e.target.value)}/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="meeting_time" className="block text-gray-700 font-bold mb-2">Meeting Time</label>
                                <input type="text" id="meeting_time" name="meeting_time" className="border rounded w-full py-2 px-3" value={meetingTime} onChange={(e) => setMeetingTime(e.target.value)}/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="meeting_timezone" className="block text-gray-700 font-bold mb-2">Your Time Zone</label>
                                <input type="text" id="meeting_timezone" name="meeting_timezone" className="border rounded w-full py-2 px-3" required value={meetingTimeZone} onChange={(e) => setMeetingTimeZone(e.target.value)}/>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="discord_name" className="block text-gray-700 font-bold mb-2">Discord Name</label>
                                <input type="text" id="discord_name" name="discord_name" className="border rounded w-full py-2 px-3" placeholder="Discord username" required value={discordName} onChange={(e) => setDiscordName(e.target.value)}/>
                            </div>

                            <div>
                                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 mb-2 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit" onClick={updateMeetup}>
                                    Update Meetup
                                </button>
                            </div>

                            <div>
                                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="button" onClick={deleteMeetup}>
                                    Delete Meetup
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EditMeetupPage;