import { CircleUserRound, Languages, Moon, Settings } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PopUpProfile({ setprofilePopUp, setBackgroundHeader }) {
  return (
    <>
      <div className="absolute top-14 right-6 z-10 h-80 w-56 border-2 text-black border-black shadow-2xl bg-white rounded-xl flex flex-col justify-center items-center font-abel gap-2">
        <div >DIMAS FIRMANSYAH</div>
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
          className="flex justify-center items-center rounded bg-red-600 text-white w-40 h-8 cursor-pointer my-2 border-2 border-black"
          onClick={() => {
            setprofilePopUp();
            setBackgroundHeader(false);
          }}
        >
          Ceck Your Profile
        </Link>
        <Link
          to={"/jkt48/login"}
          className="flex justify-center items-center cursor-pointer border-b-2 border-white hover:border-black"
        >
          Logout
        </Link>
      </div>
    </>
  );
}