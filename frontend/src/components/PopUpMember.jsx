/* eslint-disable react/prop-types */
import { XCircle } from "lucide-react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

export default function PopUpMember({
  popUpMember,
  popUpDataMember,
  setPopUpMember,
}) {
  return (
    <>
      <div className="bg-black bg-opacity-80 w-full h-screen fixed top-0 p-0 m-0 flex justify-center items-center">
        <div className="flex flex-row items-center justify-between bg-white w-8/12 h-3/4 rounded-xl p-4 gap-4">
          <XCircle
            className="bg-white text-red-600 rounded-full absolute top-16 right-48 cursor-pointer p-0.5"
            size={42}
            onClick={() => {
              setPopUpMember(!popUpMember);
              console.log(popUpMember);
            }}
          />
          <div className="w-4/12">
            <img
              src={popUpDataMember.img_main}
              alt={popUpDataMember.name}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center font-ptsans w-9/12 gap-6 px-6">
            <div className="flex justify-start items-center h-16 px-6 bg-red-600 w-full text-white font-abel font-bold rounded-lg text-2xl">
              ANGGOTA JKT48
            </div>
            <table className="font-bold font-dosis">
              <tbody>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-2 w-4/12">Nama</td>
                  <td>{popUpDataMember.name}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-2">Tanggal Lahir</td>
                  <td>{popUpDataMember.birth}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-2">Golongan Darah</td>
                  <td>{popUpDataMember.blood}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-2">Horoskop</td>
                  <td>{popUpDataMember.horoscop}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-2">Tinggi Badan</td>
                  <td>{popUpDataMember.tall}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-2">Nama Panggilan</td>
                  <td>{popUpDataMember.nick_name}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4 flex flex-row justify-center gap-4 items-center">
                    <a href={popUpDataMember.twitter} target="_blank">
                      <FaXTwitter className="text-3xl" />
                    </a>
                    <a href={popUpDataMember.instagram} target="_blank">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href={popUpDataMember.twitter} target="_blank">
                      <FaTiktok className="text-2xl" />
                    </a>
                  </td>
                  <td>
                    <button className="bg-red-600 text-white w-full h-10 rounded-lg">
                      Alamat Fan Letter dan Hadiah
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
