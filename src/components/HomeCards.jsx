import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <>
        <section class="py-4">
            <div class="container-xl lg:container m-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card bg="bg-indigo-100">
                        <h2 class="text-2xl font-bold">Browse Lunch Meetups</h2>
                        <p class="mt-2 mb-4">
                            Browse our lunch meetups and join one that fits your schedule.
                        </p>
                        <a href="/jobs.html" class="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600">
                            Browse
                        </a>
                    </Card>
                    <Card>
                        <h2 class="text-2xl font-bold">Add A Lunch Meetup</h2>
                        <p class="mt-2 mb-4">
                            Can't find a meetup that works for you? Add your own! 
                        </p>
                        <a href="/add-job.html" class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
                            Add
                        </a>
                    </Card>
                </div>
            </div>
        </section>
    </>
  );
};

export default HomeCards;