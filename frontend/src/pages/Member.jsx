import { useEffect, useState } from "react";
import SideNews from "../components/SideNews";
import SideSchedule from "../components/SideSchedule";
import PopUpMember from "../components/PopUpMember";
import Header from "../components/Header";

export default function Member() {
  const [idolMember, setIdolMember] = useState([]);
  const [popUpMember, setPopUpMember] = useState();
  const [popUpDataMember, setPopUpDataMember] = useState({});
 
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/get-all-idol-member`)
      .then((response) => response.json())
      .then((member) => setIdolMember(member));
  }, []);

  const trainees = [
    {
      id: 1,
      name: "Alya Amanda",
      image: "/src/assets/kabesha/alya.jpg",
    },
    {
      id: 2,
      name: "Anindya Ramadhani",
      image: "/src/assets/kabesha/anin.jpg",
    },
    {
      id: 3,
      name: "Cathleen Nixie",
      image: "/src/assets/kabesha/cathy.jpg",
    },
    {
      id: 4,
      name: "Celline Thefani",
      image: "/src/assets/kabesha/elin.jpg",
    },
    {
      id: 5,
      name: "Chelsea Davina",
      image: "/src/assets/kabesha/chelsea.jpg",
    },
    {
      id: 6,
      name: "Cynthia Yaputera",
      image: "/src/assets/kabesha/cynthia.jpg",
    },
    {
      id: 7,
      name: "Dena Natalia",
      image: "/src/assets/kabesha/dena.jpg",
    },
    {
      id: 8,
      name: "Desy Natalia",
      image: "/src/assets/kabesha/daisy.jpg",
    },
    {
      id: 9,
      name: "Gendis Mayrannisa",
      image: "/src/assets/kabesha/gendis.jpg",
    },
    {
      id: 10,
      name: "Jeane Victoria",
      image: "/src/assets/kabesha/jeane.jpg",
    },
    {
      id: 11,
      name: "Michelle Alexandra",
      image: "/src/assets/kabesha/michie.jpg",
    },
  ];

  const newGenerations = [
    {
      id: 1,
      name: "Abigail Rachel",
      image: "/src/assets/kabesha/aralie.jpg",
    },
    {
      id: 2,
      name: "Adeline Wijaya",
      image: "/src/assets/kabesha/delynn.jpg",
    },
    {
      id: 3,
      name: "Aisa Maharani",
      image: "/src/assets/kabesha/shasa.jpg",
    },
    {
      id: 4,
      name: "Aurhel Alana",
      image: "/src/assets/kabesha/lana.jpg",
    },
    {
      id: 5,
      name: "Catherina Vallencia",
      image: "/src/assets/kabesha/erine.jpg",
    },
    {
      id: 6,
      name: "Fritzy Rosmerian",
      image: "/src/assets/kabesha/fritzy.jpg",
    },
    {
      id: 7,
      name: "Hillary Abigail",
      image: "/src/assets/kabesha/lily.jpg",
    },
    {
      id: 8,
      name: "Jazzlyn Trisha",
      image: "/src/assets/kabesha/trisha.jpg",
    },
    {
      id: 9,
      name: "Letycia Moreen",
      image: "/src/assets/kabesha/moreen.jpg",
    },
    {
      id: 10,
      name: "Michelle Levia",
      image: "/src/assets/kabesha/levi.jpg",
    },
    {
      id: 11,
      name: "Nayla Suji",
      image: "/src/assets/kabesha/nayla.jpg",
    },
    {
      id: 12,
      name: "Nina Tutachia",
      image: "/src/assets/kabesha/nachia.jpg",
    },
    {
      id: 13,
      name: "Oline Manuel",
      image: "/src/assets/kabesha/oline.jpg",
    },
    {
      id: 14,
      name: "Regina Wilian",
      image: "/src/assets/kabesha/regie.jpg",
    },
    {
      id: 15,
      name: "Ribka Budiman",
      image: "/src/assets/kabesha/ribka.jpg",
    },
    {
      id: 16,
      name: "Shabilqis Naila",
      image: "/src/assets/kabesha/nala.jpg",
    },
    {
      id: 17,
      name: "Victoria Kimberly",
      image: "/src/assets/kabesha/kimmy.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div className="flex flex-row w-full bg-white">
          <div className="w-1/4 bg-white p-4">
            <SideNews />
            <SideSchedule />
          </div>
          <div className="w-3/4 bg-white flex flex-col gap-8">
            <img
              src="/src/assets/profile/birthday.png"
              alt="bithday-member"
              className=""
            />
            <div className="px-4 flex flex-col gap-4">
              <div className="flex justify-start items-center h-16 px-6 bg-red-600 w-full text-white font-abel font-bold rounded-lg text-2xl">
                MEMBER JKT48
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {idolMember.map((m) => (
                  <div
                    className="w-32 bg-red-600 rounded-lg border-4 border-red-600 cursor-pointer"
                    key={m.id}
                    onClick={() => {
                      setPopUpMember(!popUpMember);
                      setPopUpDataMember(m);
                    }}
                  >
                    <img src={m.img_kabesha} alt={m.name} className="rounded-lg" />
                    <div className="font-outfit text-white h-8 flex justify-center items-center font-semibold text-xs">
                      {m.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-start items-center h-16 px-6 bg-red-600 w-full text-white font-abel font-bold rounded-lg text-2xl">
                TRAINEE JKT48
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {trainees.map((m) => (
                  <div
                    className="w-32 rounded-lg border-4 border-red-600 cursor-pointer"
                    key={m.id}
                  >
                    <img src={m.image} alt={m.name} className="rounded-lg" />
                    <div className="font-outfit text-red-600 h-8 flex justify-center items-center font-semibold text-xs">
                      {m.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-start items-center h-16 px-6 bg-red-600 w-full text-white font-abel font-bold rounded-lg text-2xl">
                JKT48 NEW GENERATION
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {newGenerations.map((m) => (
                  <div
                    className="w-32 rounded-lg border-4 border-red-600 cursor-pointer"
                    key={m.id}
                  >
                    <img src={m.image} alt={m.name} className="rounded-lg" />
                    <div className="font-outfit text-red-600 h-8 flex justify-center items-center font-semibold text-xs">
                      {m.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      {popUpMember && (
        <PopUpMember
          popUpMember={popUpMember}
          setPopUpMember={setPopUpMember}
          popUpDataMember={popUpDataMember}
        />
      )}
    </>
  );
}
