import { useState } from "react";
import SideNews from "../components/SideNews";
import SideSchedule from "../components/SideSchedule";
import PopUpMember from "../components/PopUpMember";
import Header from "../components/Header";

export default function Member() {
  const [popUpMember, setPopUpMember] = useState();
  const [popUpDataMember, setPopUpDataMember] = useState({});
  const members = [
    {
      id: 1,
      name: "Amanda Sukma",
      birthDay: "17 Desember 2004",
      blood: "O",
      horoscop: "Sagitarius",
      tall: "160 Cm",
      nickName: "Amanda",
      imagePopUp: "/src/assets/member/oshi-amanda.jpg",
      image: "/src/assets/kabesha/amanda.jpg",
      twitter: "",
      instagram: "",
    },
    {
      id: 2,
      name: "Angelina Christy",
      birthDay: "5 Desember 2005",
      blood: "O",
      horoscop: "Sagitarius",
      tall: "163 Cm",
      nickName: "Christy",
      imagePopUp: "/src/assets/member/oshi-christy.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/christy.jpg",
    },
    {
      id: 3,
      name: "Aurellia",
      birthDay: "29 Oktober 2002",
      blood: "O",
      horoscop: "Scorpio",
      tall: "155 Cm",
      nickName: "Lia",
      imagePopUp: "/src/assets/member/oshi-lia.jpg",
      image: "/src/assets/kabesha/lia.jpg",
      twitter: "",
      instagram: "",
    },
    {
      id: 4,
      name: "Azizi Asadel",
      birthDay: "16 Mei 2006",
      blood: "O",
      horoscop: "Taurus",
      tall: "162 Cm",
      nickName: "Zee",
      imagePopUp: "/src/assets/member/oshi-zee.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/zee.jpg",
    },
    {
      id: 5,
      name: "Callista Alifia",
      birthDay: "8 Agustus 2005",
      blood: "O",
      horoscop: "Leo",
      tall: "157 Cm",
      nickName: "Callie",
      imagePopUp: "/src/assets/member/oshi-callie.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/callie.jpg",
    },
    {
      id: 6,
      name: "Cornelia Vanisa",
      birthDay: "26 Juli 2002",
      blood: "O",
      horoscop: "Leo",
      tall: "162 Cm",
      nickName: "Oniel",
      imagePopUp: "/src/assets/member/oshi-oniel.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/oniel.jpg",
    },
    {
      id: 7,
      name: "Febriola Sinambela",
      birthDay: "26 Februari 2005",
      blood: "B",
      horoscop: "Pisces",
      tall: "154 Cm",
      nickName: "Olla",
      imagePopUp: "/src/assets/member/oshi-olla.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/olla.jpg",
    },
    {
      id: 8,
      name: "Feni Fitriyanti",
      birthDay: "16 Januari 1999",
      blood: "O",
      horoscop: "Capricon",
      tall: "162 Cm",
      nickName: "Feni",
      imagePopUp: "/src/assets/member/oshi-feni.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/feni.jpg",
    },
    {
      id: 9,
      name: "Fiony Alveria",
      birthDay: "04 Februari 2002",
      blood: "O",
      horoscop: "Aquarius",
      tall: "158 Cm",
      nickName: "Fiony",
      imagePopUp: "/src/assets/member/oshi-fiony.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/fiony.jpg",
    },
    {
      id: 10,
      name: "Flora Shafiq",
      birthDay: "04 April 2005",
      blood: "B",
      horoscop: "Aries",
      tall: "149 Cm",
      nickName: "Flora",
      imagePopUp: "/src/assets/member/oshi-flora.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/flora.jpg",
    },
    {
      id: 11,
      birthDay: "13 Februari 2006",
      blood: "B",
      horoscop: "Aquarius",
      tall: "154 Cm",
      nickName: "Freya",
      imagePopUp: "/src/assets/member/oshi-freya.jpg",
      twitter: "",
      instagram: "",
      name: "Freya Jayawardana",
      image: "/src/assets/kabesha/freya.jpg",
    },
    {
      id: 12,
      name: "Gabriela Abigail",
      birthDay: "07 Agustus 2006",
      blood: "B",
      horoscop: "Leo",
      tall: "160 Cm",
      nickName: "Ella",
      imagePopUp: "/src/assets/member/oshi-ella.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/ella.jpg",
    },
    {
      id: 13,
      name: "Gita Sekar Andarini",
      birthDay: "30 Juni 2001",
      blood: "O",
      horoscop: "Cancer",
      tall: "165 Cm",
      nickName: "Gita",
      imagePopUp: "/src/assets/member/oshi-gita.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/gita.jpg",
    },
    {
      id: 14,
      birthDay: "18 Oktober 2007",
      blood: "B",
      horoscop: "Libra",
      tall: "165 Cm",
      nickName: "Gracie",
      imagePopUp: "/src/assets/member/oshi-gracie.jpg",
      twitter: "",
      instagram: "",
      name: "Grace Octaviani",
      image: "/src/assets/kabesha/grace.jpg",
    },
    {
      id: 15,
      name: "Greesella Adhalia",
      birthDay: "10 Januari 2006",
      blood: "O",
      horoscop: "Capricon",
      tall: "165 Cm",
      nickName: "Greesel",
      imagePopUp: "/src/assets/member/oshi-greesel.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/greesel.jpg",
    },
    {
      id: 16,
      name: "Helisma Putri",
      birthDay: "15 Juni 2000",
      blood: "A",
      horoscop: "Gemini",
      tall: "165 Cm",
      nickName: "ELi",
      imagePopUp: "/src/assets/member/oshi-eli.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/eli.jpg",
    },
    {
      id: 17,
      name: "Indah Cahya",
      birthDay: "20 Maret 2001",
      blood: "A",
      horoscop: "Pisces",
      tall: "165 Cm",
      nickName: "Indah",
      imagePopUp: "/src/assets/member/oshi-indah.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/indah.jpg",
    },
    {
      id: 18,
      name: "Indira Seruni",
      birthDay: "24 April 2004",
      blood: "A",
      horoscop: "Taurus",
      tall: "160 Cm",
      nickName: "ELi",
      imagePopUp: "/src/assets/member/oshi-indira.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/indira.jpg",
    },
    {
      id: 19,
      name: "Jessica Chandra",
      birthDay: "15 Juni 2000",
      blood: "A",
      horoscop: "Gemini",
      tall: "165 Cm",
      nickName: "ELi",
      imagePopUp: "/src/assets/member/oshi-jessi.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/jessi.jpg",
    },
    {
      id: 20,
      name: "Jesslyn Elly",
      birthDay: "23 September 2005",
      blood: "O",
      horoscop: "Libra",
      tall: "163 Cm",
      nickName: "Jessi",
      imagePopUp: "/src/assets/member/oshi-lyn.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/lyn.jpg",
    },
    {
      id: 21,
      name: "Kathrina Irene",
      birthDay: "26 Juli 2006",
      blood: "A",
      horoscop: "Leo",
      tall: "165 Cm",
      nickName: "Kathrina",
      imagePopUp: "/src/assets/member/oshi-kathrina.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/kathrina.jpg",
    },
    {
      id: 22,
      name: "Lulu Salsabila",
      birthDay: "23 Oktober 2002",
      blood: "B",
      horoscop: "Scorpio",
      tall: "157 Cm",
      nickName: "Lulu",
      imagePopUp: "/src/assets/member/oshi-lulu.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/lulu.jpg",
    },
    {
      id: 23,
      name: "Marsha Lenathea",
      birthDay: "09 Januari 2006",
      blood: "O",
      horoscop: "Capricon",
      tall: "163 Cm",
      nickName: "Marsha",
      imagePopUp: "/src/assets/member/oshi-marsha.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/marsha.jpg",
    },
    {
      id: 24,
      name: "Mutiara Azzahra",
      birthDay: "12 Juli 2004",
      blood: "B",
      horoscop: "Cancer",
      tall: "158 Cm",
      nickName: "Muthe",
      imagePopUp: "/src/assets/member/oshi-muthe.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/muthe.jpg",
    },
    {
      id: 25,
      name: "Raisha Syifa",
      birthDay: "11 November 2007",
      blood: "AB",
      horoscop: "Scorpio",
      tall: "163 Cm",
      nickName: "Raisha",
      imagePopUp: "/src/assets/member/oshi-raisha.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/raisha.jpg",
    },
    {
      id: 26,
      name: "Reva Fidela",
      birthDay: "14 Juli 2006",
      blood: "A",
      horoscop: "Cancer",
      tall: "159 Cm",
      nickName: "Adel",
      imagePopUp: "/src/assets/member/oshi-adel.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/reva.jpg",
    },
    {
      id: 27,
      name: "Shani Indira Natio",
      birthDay: "05 Oktober 1998",
      blood: "B",
      horoscop: "Libra",
      tall: "167 Cm",
      nickName: "Shani",
      imagePopUp: "/src/assets/member/oshi-shani.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/shani.jpg",
    },
    {
      id: 28,
      name: "Shania Gracia",
      birthDay: "31 Agustus 1999",
      blood: "A",
      horoscop: "Virgo",
      tall: "161 Cm",
      nickName: "Gracia",
      imagePopUp: "/src/assets/member/oshi-gracia.jpg",
      twitter: "",
      instagram: "",
      image: "/src/assets/kabesha/cigre.jpg",
    },
  ];

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
                {members.map((m) => (
                  <div
                    className="w-32 bg-red-600 rounded-lg border-4 border-red-600 cursor-pointer"
                    key={m.id}
                    onClick={() => {
                      setPopUpMember(!popUpMember);
                      setPopUpDataMember(m);
                    }}
                  >
                    <img src={m.image} alt={m.name} className="rounded-lg" />
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
