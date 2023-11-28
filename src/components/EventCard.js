import React from "react";
import Image from "next/image";
import { LuInfinity } from "react-icons/lu";
import { LuVideo } from "react-icons/lu";
import Invited from "/public/invited.webp";

const EventCard = ({ event }) => {
  const dateObject = new Date(event.startDate);
  const monthName = dateObject.toLocaleDateString("en-US", {
    month: "short",
  });
  const dayName = dateObject.toLocaleDateString("en-US", { weekday: "long" });
  const date = dateObject.getDate();
  return (
    <div className="flex pt-20 gap-10">
      <div className="gap-10 sm:flex hidden">
        <div>
          <div className="font-medium">{`${monthName} ${date}`}</div>
          <div className="text-gray-500 font-medium">{dayName}</div>
        </div>
        <div className="w-4 h-4 rounded-full bg-white border-4 border-gray-300 mt-1"></div>
      </div>
      <div className="bg-white rounded-xl p-5 w-full flex justify-between">
        <div>
          <div className="text-gray-400 font-medium">{event.startTime}</div>
          <div className="text-2xl font-semibold pt-3">{event.eventName}</div>
          <div className="pt-3 flex gap-2 items-center text-lg">
            <div className="rounded-full h-5 w-5 bg-blue-500 text-white flex items-center justify-center">
              <LuInfinity />
            </div>
            <div className="text-gray-400 font-medium">By OctoML</div>
          </div>
          <div className="pt-3 flex gap-2 items-center text-lg">
            <LuVideo className="text-gray-400 font-medium h-5 w-5" />
            <div className="text-gray-400 font-medium">Virtual</div>
          </div>
          <div className="pt-3">
          <Image src={event.eventImage} width={0} height={0} className="max-w-[228px] sm:hidden block " alt="invited" />
            <div className="bg-blue-600 text-white px-2 py-1 rounded-lg text-sm font-medium max-w-[65px]">
              Invited
            </div>
          </div>
        </div>
        <Image src={event.eventImage} width={0} height={0} className="max-w-[228px] sm:block hidden " alt="invited" />
      </div>
    </div>
  );
};

export default EventCard;
