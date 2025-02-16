import React from "react";

const MeetupListings = () => {
  return (
    <section class="bg-blue-50 px-4 py-10">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Meetups
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <h3 class="text-xl font-bold mt-5">Let's practice our stories!</h3>
              </div>

              <div class="mb-5">
               Would love to meet with someone who'd like to practice our stories over lunch. We can take turns and give each other feedback to make our stories even better!
              </div>

              <h3 class="text-indigo-500 mb-2">March 1, 2025 @ 12:00 PM EST</h3>
              <h3 class="text-orange-700 mb-3">byteBreaker</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <a href="job.html" class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Join
                </a>
              </div>
            </div>
          </div>
   
          <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <h3 class="text-xl font-bold mt-5">Regular Lunch Meetup</h3>
              </div>

              <div class="mb-5">
               Let's take a break from coding and get to know each other over lunch. 
              </div>

              <h3 class="text-indigo-500 mb-2">March 4, 2025 @ 11:00 AM PST</h3>
              <h3 class="text-orange-700 mb-3">loopLegend</h3>
              

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <a href="job.html" class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Join
                </a>
              </div>
            </div>
          </div>
   
          <div class="bg-white rounded-xl shadow-md relative">
            <div class="p-4">
              <div class="mb-6">
                <h3 class="text-xl font-bold mt-5">Lunch Study Session</h3>
              </div>

              <div class="mb-5">
               Wanna practice Banki with me? I'd love to get feedback on my answers before my upcoming interview!
              </div>

              <h3 class="text-indigo-500 mb-2">March 5, 2025 @ 11:45 AM CET</h3>
              <h3 class="text-orange-700 mb-3">hashHero</h3>

              <div class="border border-gray-100 mb-5"></div>

              <div class="flex flex-col lg:flex-row justify-between mb-4">
                <a href="job.html" class="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                    Join
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default MeetupListings;