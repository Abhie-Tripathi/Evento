"use client";
import { GetColorName } from "hex-color-to-color-name";
import { useEventsContext } from "@/contexts/EventsContext";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Emoji from "/public/emoji.jpg";
import { FaAngleDown } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { BsLayers } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { LuTicket } from "react-icons/lu";
import { RxPencil1 } from "react-icons/rx";
import { BsPersonCheck } from "react-icons/bs";
import Invited from "/public/invited.webp";
import { FaImage } from "react-icons/fa6";
import Theme from "@/components/Theme";
import { LuChevronsUpDown } from "react-icons/lu";
import MenuLinks from "@/components/MenuLinks";

export default function Home() {
  const currentFullDate = new Date().toISOString().split("T")[0];
  const currentMonth = new Date()
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();
  const currentDate = new Date().getDate();
  const router = useRouter();

  const { events, setEvents } = useEventsContext();

  const [monthName, setMonthName] = useState(currentMonth);
  const [date, setDate] = useState(currentDate);
  const [selectedStartDate, setSelectedStartDate] = useState(currentFullDate);
  const [selectedStartTime, setSelectedStartTime] = useState("12:00");

  const [selectedEndDate, setSelectedEndDate] = useState(currentFullDate);
  const [selectedEndTime, setSelectedEndTime] = useState("12:30");

  const [eventName, setEventName] = useState();
  const [eventLocation, setEventLocation] = useState();

  const [selectedImage, setSelectedImage] = useState(Invited);
  const [selectedColor, setSelectedColor] = useState("#6B7280");
  const [selectedColorName, setSelectedColorName] = useState("Gray");

  const handleStartDateChange = (e) => {
    const dateValue = e.target.value;
    const dateObject = new Date(dateValue);
    const date = dateObject.getDate();
    const monthName = dateObject.toLocaleDateString("en-US", {
      month: "short",
    });
    setSelectedStartDate(dateValue);
    setMonthName(monthName.toUpperCase());
    setDate(date);
  };

  const handleEndDateChange = (e) => {
    setSelectedEndDate(e.target.value);
  };

  const handleStartTimechange = (e) => {
    setSelectedStartTime(e.target.value);
  };

  const handleEndTimechange = (e) => {
    setSelectedEndTime(e.target.value);
  };

  const handleEventName = (e) => {
    setEventName(e.target.value);
  };

  const handleEventLocation = (e) => {
    setEventLocation(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
    setTimeout(() => {
      setSelectedColorName(GetColorName(e.target.value));
    }, 600);
  };

  const handleCreateEvent = () => {
    const newEvent = {
      startDate: selectedStartDate,
      startTime: selectedStartTime,
      eventName: eventName,
      eventLocation: eventLocation,
      eventImage: selectedImage,
    };
    setEvents((events) => [...events, newEvent]);
    router.push("/events");
  };

  return (
    <main className="bg-gray-200 lg:w-screen lg:h-screen ">
      <div className="flex flex-col w-full h-full justify-center items-center lg:p-0 sm:p-10 p-2">
        <MenuLinks />
        <div className="bg-white rounded-xl lg:w-[80%] lg:h-[80%] w-full h-full flex gap-4 lg:flex-row flex-col overflow-y-auto">
          <div className="sm:p-6 p-2 w-full">
            <div className="flex gap-2 items-center ">
              <Image src={Emoji} width={25} height={25} alt="emoji" />
              <div>
                <div className="text-gray-500 text-xs font-semibold">
                  Create under
                </div>
                <div className="font-semibold text-sm">Personal Calendar</div>
              </div>
              <div className="pl-10 text-gray-500">
                <FaAngleDown />
              </div>
            </div>
            <input
              type="text"
              className="text-4xl w-full text-gray-500 font-bold outline-none pt-8"
              placeholder="Event Name"
              value={eventName}
              onChange={handleEventName}
            />
            <div className="flex pt-6 gap-3 ">
              <div className="w-12 h-10">
                <div className="bg-gray-200 rounded-t-lg border border-t-gray-300 text-gray-500 w-full text-center p-1 font-bold text-[10px]">
                  {monthName}
                </div>
                <div className="text-gray-500 rounded-b-lg font-bold border border-gray-300 text-center">
                  {date}
                </div>
              </div>
              <div className="w-full rounded-lg bg-gray-100 p-3">
                <div className="flex justify-between items-center font-medium flex-wrap">
                  <div className="flex-1">Start</div>
                  <input
                    type="date"
                    className="flex-2 bg-gray-200 px-3 rounded-md mr-2"
                    value={selectedStartDate}
                    onChange={handleStartDateChange}
                  />
                  <input
                    type="time"
                    className="flex-2 bg-gray-200 px-3 rounded-md mt-1 sm:mt-0"
                    onChange={handleStartTimechange}
                    value={selectedStartTime}
                  />
                </div>
                <div className="flex items-center justify-between font-medium pt-1 flex-wrap">
                  <div className="flex-1">End</div>
                  <input
                    type="date"
                    className="flex-2 bg-gray-200 px-3 rounded-md mr-2"
                    value={selectedEndDate}
                    onChange={handleEndDateChange}
                  />
                  <input
                    type="time"
                    className="flex-2 bg-gray-200 px-3 rounded-md mt-1 sm:mt-0"
                    value={selectedEndTime}
                    onChange={handleEndTimechange}
                  />
                </div>

                <div className="flex gap-3 items-center pt-3 text-gray-500 text-[15px]">
                  <CiGlobe className="text-lg" />
                  <div>GMT+05:30 Calcutta</div>
                </div>

                <div className="border-b border-gray-300 pt-2"></div>

                <div className="flex gap-3 items-center text-gray-500 pt-2 text-[15px]">
                  <BsLayers className="text-lg" />
                  <div>Create Multi-Session Event</div>
                </div>
              </div>
            </div>

            <div className="flex pt-3 gap-3 ">
              <div className="w-12 h-10 border border-gray-300 flex justify-center items-center rounded-lg text-gray-500 ">
                <GrLocation className="text-2xl font-bold" />
              </div>
              <label className="w-full rounded-lg bg-gray-100 p-3">
                <input
                  type="text"
                  className="text-gray-500 font-medium outline-none bg-gray-100 w-[150px]"
                  value={eventLocation}
                  onChange={handleEventLocation}
                  placeholder="Add Event Location"
                />
                <div className="text-gray-400">
                  Offline location or virtual link
                </div>
              </label>
            </div>
            <div className="text-gray-500 pt-6 font-medium pb-3">
              Event Options
            </div>
            <div className="w-full rounded-lg bg-gray-100 p-3">
              <div className="flex justify-between items-center text-gray-400">
                <div className="flex gap-3 items-center">
                  <LuTicket className="text-xl" />
                  <span className="text-gray-500 font-medium">Tickets</span>
                </div>
                <label className="flex gap-2 items-center font-bold">
                  <input
                    type="text"
                    className="font-medium bg-gray-100 outline-none w-10"
                    placeholder="Free"
                  />
                  <RxPencil1 className="text-xl" />
                </label>
              </div>
              <div className="flex justify-between items-center text-gray-400 pt-3">
                <div className="flex gap-3 items-center">
                  <BsPersonCheck className="text-xl" />
                  <span className="text-gray-500 font-medium">
                    Require Approval
                  </span>
                </div>
                <div className="flex gap-3 items-center font-bold">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              </div>
            </div>

            <button
              className="lg:block hidden bg-gray-800 text-lg text-white font-semibold items-center w-full rounded-xl py-3 mt-8"
              onClick={handleCreateEvent}
            >
              Create Event
            </button>
          </div>

          <div className="sm:p-6 p-2 w-full">
            <label className="flex justify-center relative cursor-pointer">
              <Image
                src={selectedImage}
                width={0}
                height={0}
                className="rounded-xl w-full h-full max-w-[400px] max-h-[327px]"
                alt="invited"
              />
              <FaImage className="absolute bottom-0 right-0 text-4xl" />
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>

            <div className="pt-3 text-gray-500 font-medium">Theme</div>
            <Theme />

            <div className="w-full rounded-lg bg-gray-100 p-3 mt-5">
              <div className="flex justify-between items-center text-gray-400 relative">
                <div className="flex gap-3 items-center">
                  <div
                    className="w-6 h-6 rounded-full"
                    style={{ backgroundColor: selectedColor }}
                  />
                  <span className="text-gray-500 font-medium">Color</span>
                </div>
                <label className="flex gap-3 items-center font-bold cursor-pointer">
                  <input
                    type="color"
                    className="invisible"
                    onChange={handleColorChange}
                  />
                  <span className="font-medium">{selectedColorName}</span>
                  <LuChevronsUpDown className="text-xl" />
                </label>
              </div>
              <div className="flex justify-between items-center text-gray-400 pt-3">
                <div className="flex gap-3 items-center">
                  <div className="text-lg text-black font-semibold">Ag</div>
                  <span className="text-gray-500 font-medium">Typeface</span>
                </div>
                <div className="flex gap-3 items-center font-bold">
                  <span className="font-medium">Default</span>
                  <LuChevronsUpDown className="text-xl" />
                </div>
              </div>
            </div>
            <button
              className="block lg:hidden bg-gray-800 text-lg text-white font-semibold items-center w-full rounded-xl py-3 mt-8"
              onClick={handleCreateEvent}
            >
              Create Event
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
