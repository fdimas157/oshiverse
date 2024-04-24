/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { useEffect, useState } from "react";
import PopUpProfile from "./PopUpProfile";

export default function Header({ backgroundHeader, setBackgroundHeader }) {
  const [profilePopUp, setprofilePopUp] = useState();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/v1/get-user/${localStorage.getItem(
        "currentUser"
      )}`
    )
      .then((response) => response.json())
      .then((currentUser) => setCurrentUser(currentUser));
  }, []);

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
        <div>Ohaiyou, {currentUser.name}</div>
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
        <PopUpProfile
          profilePopUp={profilePopUp}
          setprofilePopUp={setprofilePopUp}
        />
      )}
    </nav>
  );
}
