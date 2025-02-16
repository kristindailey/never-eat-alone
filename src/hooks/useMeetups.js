import React from "react";
import { useState, useEffect } from "react";
import { meetupServices } from "../services/meetupServices";

export const useMeetups = () => {
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {
        const fetchMeetups = async () => {
            const data = await meetupServices.getAllMeetups();
            setMeetups(data.documents);
        };
        fetchMeetups();
    }, []);

    return meetups
};