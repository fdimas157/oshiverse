/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { FaBell, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import PopUpProfile from "./PopUpProfile";

export default function HeaderShop({ totalCart }) {
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
      className={
        "flex justify-between items-center h-16  font-dosis font-semibold w-full bg-black text-white"
      }
    >
      <Link
        to="/jkt48/"
        className="w-48 text-3xl text-center"
        onClick={() => {
          setprofilePopUp();
        }}
      >
        <span className="cursor-pointer font-abel">JKT48</span>
      </Link>
      <div className="flex gap-8 justify-between items-center w-8/12 h-10">
        <form
          action=""
          className="font-outfit font-normal w-full text-black text-xs"
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari barang ...."
            className="w-full rounded p-1 px-4"
          />
        </form>
        <Link
          onClick={() => {
            setprofilePopUp();
          }}
          to="/jkt48/merchandise/cart"
          className={"cursor-pointer"}
        >
          <FaBell size={24} />
          <div className="text-xs font-outfit bg-red-600 absolute top-3 right-52 w-4 h-4 flex justify-center items-center rounded-full">
            {totalCart}
          </div>
        </Link>
        <Link
          onClick={() => {
            setprofilePopUp();
          }}
          to="/jkt48/merchandise/cart"
          className={"cursor-pointer"}
        >
          <FaShoppingCart size={24} />
        </Link>
      </div>
      <div className="flex gap-4 w-52 justify-center items-center font-abel">
        <div>{currentUser.points} Points</div>
        <div className={"cursor-pointer"}>
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
