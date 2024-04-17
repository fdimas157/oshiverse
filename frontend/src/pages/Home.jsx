import { FaSpotify } from "react-icons/fa";
import { SiYoutubemusic, SiApplemusic } from "react-icons/si";
import Header from "../components/Header";

export default function Home() {
  const singles = [
    {
      id: 1,
      name: "Aturan Anti Cinta",
      image: "/src/assets/cover/aturan-anti-cinta.jpg",
    },
    {
      id: 2,
      name: "Mahagita",
      image: "/src/assets/cover/mahagita.jpg",
    },
    {
      id: 3,
      name: "Pajama Drive",
      image: "/src/assets/cover/pajama-drive.jpg",
    },
    {
      id: 4,
      name: "Matahari Milikku",
      image: "/src/assets/cover/matahari-milikku.jpg",
    },
    {
      id: 5,
      name: "Flying High",
      image: "/src/assets/cover/flying-high.jpg",
    },
    {
      id: 6,
      name: "Gadis Remaja",
      image: "/src/assets/cover/gadis-remaja.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center bg-black">
        <div className="absolute top-14 text-white flex justify-center gap-2 flex-col items-center z-10 h-screen font-outfit font-bold text-5xl pb-8">
          - MELOMPAT LEBIH TINGGI -
          <div className="text-sm font-normal font-dosis">
            Melodi yang Mengikat Hati: Rasakan Kekuatan Musik dan Persahabatan
            dengan JK48
          </div>
        </div>
        <img
          className="w-ful opacity-50"
          src="/src/assets/background/home-bg.jpg"
          alt="Background JKT48"
        />
        {/* <div className="w-full h-16 bg-black flex flex-row p-4 items-center gap-4">
          <div className="w-2/12 bg-red-600 h-full rounded-sm"></div>
          <div className="w-10/12 bg-red-600 h-1  rounded-sm"></div>
        </div> */}
        <div className="w-full bg-black text-white p-4">
          <div className="absolute right-0 w-6/12 h-3/4 p-12 font-outfit flex flex-col justify-center gap-4 text-right">
            <div className="text-4xl font-bold ">
              Tumbuh dan Berkembang Bersama Fans
            </div>
            <div className="text-red-600 font-medium text-sm">
              - JKT48 NEW ERA -
            </div>
            <div className="font-dosis ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eius adipisci voluptate dolor iure architecto
              alias, repudiandae, nihil vel sed beatae magnam. Vel perferendis,
              eveniet nemo incidunt expedita ipsum esse? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illum autem eum tempore sint
              ipsum, architecto porro eveniet quaerat expedita veritatis,
              perferendis neque doloribus? Minus, ducimus harum animi excepturi
              odit consequatur?
            </div>
          </div>
          <img
            src="/src/assets/background/side-home-1.png"
            alt="side-bg"
            className="w-3/4"
          />
        </div>
        <div className="w-full bg-black text-white p-4 flex flex-row justify-end">
          <div className="absolute left-0 w-6/12 h-3/4 p-12 font-outfit flex flex-col justify-center gap-4 text-left">
            <div className="text-4xl font-bold ">
              Wujudkan Impianmu Bersama Kami
            </div>
            <div className="text-red-600 font-medium text-sm">
              - JKT48 NEW ERA -
            </div>
            <div className="font-dosis ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eius adipisci voluptate dolor iure architecto
              alias, repudiandae, nihil vel sed beatae magnam. Vel perferendis,
              eveniet nemo incidunt expedita ipsum esse? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illum autem eum tempore sint
              ipsum, architecto porro eveniet quaerat expedita veritatis,
              perferendis neque doloribus? Minus, ducimus harum animi excepturi
              odit consequatur?
            </div>
          </div>
          <img
            src="/src/assets/background/side-home-2.png"
            alt="side-bg"
            className="w-3/4"
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-6 flex-wrap w-full">
          {singles.map((s) => (
            <div
              className="flex flex-col gap-4 w-44 h-80 p-2 border-2 border-red-600 rounded-lg justify-center"
              key={s.id}
            >
              <img src={s.image} alt={s.name} className="rounded-md" />
              <div className="font-outfit text-center text-white font-bold">
                {s.name} <br />{" "}
                <span className="font-dosis text-xs font-normal">
                  Nikmati di
                </span>
              </div>
              <div className="flex flex-row gap-4 justify-center items-center text-3xl">
                <FaSpotify
                  className=" text-green-700 cursor-pointer"
                  title="Spotify"
                />
                <SiApplemusic
                  className="text-white cursor-pointer"
                  title="Apple Music"
                />
                <SiYoutubemusic
                  className="text-3xl text-red-600 cursor-pointer"
                  title="Youtube"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-5xl text-white font-outfit font-bold p-12 pb-6">
          - JKT48 NEW ERA -
        </div>
        <div className="w-full p-4">
          <img
            src="/src/assets/background/main-article.png"
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex flex-row w-full p-2">
          <img
            src="/src/assets/background/article-2.png"
            alt=""
            className="w-1/2 p-2"
          />
          <img
            src="/src/assets/background/article-3.png"
            alt=""
            className="w-1/2 p-2"
          />
        </div>
      </main>
    </>
  );
}
