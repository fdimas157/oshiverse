/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { CircleUserRound, Moon, Settings, Languages } from "lucide-react";
import { FaBell, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function HeaderShop() {
  const [profilePopUp, setprofilePopUp] = useState();

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
        <form action="" className="font-abel w-full text-black text-xs">
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
          <FaShoppingCart size={24} />
        </Link>
        <Link
          onClick={() => {
            setprofilePopUp();
          }}
          to="/jkt48/merchandise/cart"
          className={"cursor-pointer"}
        >
          <FaBell size={24} />
        </Link>
      </div>
      <div className="flex gap-4 w-52 justify-center items-center font-abel">
        <div>100.000 Points</div>
        <div className={"cursor-pointer"}>
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
