import React from "react";
import { SiGoogletagmanager } from "react-icons/si";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegCompass } from "react-icons/fa";
import Link from "next/link";

const menus = [
  {
    name: "Events",
    icon: <SiGoogletagmanager />,
    href: "/events",
  },
  {
    name: "Calendars",
    icon: <LuCalendarDays />,
    href: "/calendars",
  },
  {
    name: "Explore",
    icon: <FaRegCompass />,
    href: "/explore",
  },
];

const MenuLinks = () => {
  return (
    <div className="self-start lg:gap-5 gap-4 pl-2 lg:pl-40 pb-5 hidden sm:flex">
      {menus.map((menu) => (
        <Link
          key={menu.href}
          className="flex items-center gap-2 text-gray-500 hover:bg-gray-800 hover:text-white p-3 rounded-xl"
          href={menu.href}
        >
          {menu.icon}
          <span className="font-semibold">{menu.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default MenuLinks;
