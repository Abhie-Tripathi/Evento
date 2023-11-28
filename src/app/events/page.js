"use client";

import React from "react";
import { useEventsContext } from "@/contexts/EventsContext";
import EventCard from "@/components/EventCard";

const page = () => {
  const { events } = useEventsContext();

  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        background:
          "linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)",
      }}
    >
      <div className="w-[80%] h-[80%]">
        <div className="flex justify-between">
          <div className="text-4xl font-semibold text-gray-800">Events</div>
          <div className="flex items-center border-2 border-gray-300 rounded-xl bg-gray-300">
            <div className="px-5 py-2 bg-gray-100 rounded-xl font-medium">
              Upcoming
            </div>
            <div className="px-5  py-2 font-medium text-gray-500">Past</div>
          </div>
        </div>

        {!events.length == 0 ? (
          events.map((event,index) => <EventCard event={event} key={index} />)
        ) : (
          <div className="w-full h-full flex justify-center items-center text-2xl font-bold text-gray-500">
            No Events
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
