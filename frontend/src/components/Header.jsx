/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CircleUserRound, Moon, Settings, Languages } from "lucide-react";
import { useState } from "react";

export default function Header({ backgroundHeader, setBackgroundHeader }) {
  const [profilePopUp, setprofilePopUp] = useState();

  return (
    <nav
      className={`flex justify-between items-center h-16  font-dosis font-semibold w-full  ${
        backgroundHeader ? "bg-black text-red-600" : "bg-red-600 text-white"
      }`}
    >
      <Link
        to="/jkt48/"
        className="w-48 text-3xl text-center"
        onClick={() => {
          setprofilePopUp();
          setBackgroundHeader(true);
        }}
      >
        <span className="cursor-pointer font-abel">JKT48</span>
      </Link>
      <div className="flex gap-8">
        <Link
          onClick={() => {
            setprofilePopUp();
            setBackgroundHeader(false);
          }}
          to="/jkt48/schedule"
          className={`cursor-pointer border-b-2  ${
            backgroundHeader
              ? "border-black hover:border-red-600"
              : "border-red-600 hover:border-white"
          }`}
        >
          SCHEDULE
        </Link>
        <Link
          onClick={() => {
            setprofilePopUp();
            setBackgroundHeader(false);
          }}
          to="/jkt48/member"
          className={`cursor-pointer border-b-2  ${
            backgroundHeader
              ? "border-black hover:border-red-600"
              : "border-red-600 hover:border-white"
          }`}
        >
          MEMBER
        </Link>
        <Link
          onClick={() => {
            setprofilePopUp();
            setBackgroundHeader(false);
          }}
          to="/jkt48/theater"
          className={`cursor-pointer border-b-2  ${
            backgroundHeader
              ? "border-black hover:border-red-600"
              : "border-red-600 hover:border-white"
          }`}
        >
          THEATER
        </Link>
        <Link
          onClick={() => {
            setprofilePopUp();
            setBackgroundHeader(false);
          }}
          to="/jkt48/merchandise"
          className={`cursor-pointer border-b-2  ${
            backgroundHeader
              ? "border-black hover:border-red-600"
              : "border-red-600 hover:border-white"
          }`}
        >
          MERCHANDISE
        </Link>
      </div>
      <div className="flex gap-4 w-52 justify-center items-center ">
        <div>Ohaiyou, Dimas !</div>
        <div
          className={`cursor-pointer ${
            backgroundHeader ? "text-red-600" : "text-white"
          }`}
        >
          <CircleUserRound
            size={40}
            onClick={() => setprofilePopUp(!profilePopUp)}
          />
        </div>
      </div>
      {profilePopUp && (
        <div className="absolute top-14 right-6 z-10 h-80 w-56 border-2 border-black shadow-2xl bg-white rounded-xl flex flex-col justify-center items-center font-abel gap-2">
          <div>DIMAS FIRMANSYAH</div>
          <CircleUserRound size={72} className="text-black" />
          <div className="text-xs">fdimas157@gmail.com</div>
          <div className="flex gap-2 text-white">
            <Moon
              size={28}
              className="bg-red-600 p-1 rounded-2xl cursor-pointer"
            />
            <Settings
              size={28}
              className="bg-red-600 p-1 rounded-2xl cursor-pointer"
            />
            <Languages
              size={28}
              className="bg-red-600 p-1 rounded-2xl cursor-pointer"
            />
          </div>
          <Link
            to={"/jkt48/profile"}
            className="flex justify-center items-center rounded-lg bg-red-600 text-white w-40 h-8 cursor-pointer my-2 border-2 border-black"
            onClick={() => {
              setprofilePopUp();
              setBackgroundHeader(false);
            }}
          >
            Ceck Your Profile
          </Link>
          <Link
            to={"/jkt48/login"}
            className="flex justify-center items-center cursor-pointer"
          >
            Logout
          </Link>
        </div>
      )}
    </nav>
  );
}
