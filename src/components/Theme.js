import React, { useState } from "react";

const themeTypes = [
  {
    name: "Minimal",
    style: { backgroundColor: "rgb(209 213 219)" },
  },
  {
    name: "Holiday",
    style: {
      background: "linear-gradient(to right, #fa709a 0%, #fee140 100%)",
    },
  },
  {
    name: "Abstract",
    style: {
      background:
        "linear-gradient(109.6deg, rgb(220, 196, 252) 11.2%, rgb(150, 199, 253) 100.2%)",
    },
  },
  {
    name: "Quantum",
    style: {
      background:
        "radial-gradient(circle at 10% 20%, rgb(62, 133, 238) 1.1%, rgb(227, 137, 240) 43.7%, rgb(243, 193, 124) 89.7%)",
    },
  },
];

const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState("Minimal");

  const ThemeCard = ({ name, style }) => {
    return (
      <div className="cursor-pointer" onClick={() => setSelectedTheme(name)}>
        <div
          className={`p-2 rounded-xl ${
            selectedTheme == name ? "shadow-lg" : ""
          }`}
          style={style}
        >
          <div className="w-[84px] h-[62px] rounded-xl p-2 bg-white ">
            <div className="text-sm font-semibold">Title</div>
            <div className="w-full mt-1 h-2 bg-gray-300"></div>
            <div className="w-[80%] mt-1 h-2 bg-gray-300"></div>
          </div>
        </div>
        <div
          className={`text-[12px] font-semibold pt-1 text-center ${
            selectedTheme == name ? "" : "text-gray-400"
          }`}
        >
          {name}
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-3 pt-2 flex-wrap sm:flex-nowrap">
      {themeTypes.map((theme) => (
        <ThemeCard name={theme.name} style={theme.style} key={theme.name}/>
      ))}
    </div>
  );
};

export default Theme;
