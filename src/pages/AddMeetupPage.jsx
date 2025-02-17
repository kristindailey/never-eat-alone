import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMeetupPage = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newMeetup = {
        title, 
        type,
        location,
        description,
        salary,
        company: {
            name: companyName,
            description: companyDescription,
            contactEmail, 
            contactPhone,
        },
    };

    addJobSubmit(newJob);

    toast.success("Job added successfully.");

    return navigate("/jobs");
};

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Meetup</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Meetup Listing Name</label>
              <input type="text" id="title" name="title" className="border rounded w-full py-2 px-3 mb-2" placeholder="e.g., Banki Over Lunch" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea id="description" name="description" className="border rounded w-full py-2 px-3" rows="4" placeholder="List your intention (e.g., get to know each other, study, interview prep, etc.) and anything you might want to discuss over lunch." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Meeting Date
              </label>
              <input type='text' id='location' name='location' className='border rounded w-full py-2 px-3 mb-2' placeholder='e.g., March 31, 2025' required value={location} onChange={(e) => setLocation(e.target.value)}/>
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2">Meeting Time</label>
              <input type="text" id="company" name="company" className="border rounded w-full py-2 px-3" placeholder="e.g., 12:00 PM" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
            </div>

            <div className="mb-4">
              <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">Your Time Zone</label>
              <input type="email" id="contact_email" name="contact_email" className="border rounded w-full py-2 px-3" placeholder="e.g., PST" required value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}/>
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