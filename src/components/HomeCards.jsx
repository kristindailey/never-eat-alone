import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCards = () => {
  return (
    <>
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card bg="bg-indigo-100">
                        <h2 className="text-2xl font-bold">Browse Lunch Meetups</h2>
                        <p className="mt-2 mb-4">
                            Browse our lunch meetups and join one that fits your schedule.
                        </p>
                        <Link to="/" className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
                            Browse
                        </Link>
                    </Card>
                    <Card>
                        <h2 className="text-2xl font-bold">Add A Lunch Meetup</h2>
                        <p className="mt-2 mb-4">
                            Can't find a meetup that works for you? Add your own! 
                        </p>
                        <Link to="/add-meetup" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                            Add
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
    </>
  );
};

export default HomeCards;