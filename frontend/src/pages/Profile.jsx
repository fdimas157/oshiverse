import { XCircle } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";

export default function Profile() {
  const [openPopUp, setOpenPopUp] = useState();
  console.log(openPopUp);

  const members = [
    {
      id: 1,
      name: "Reva Fidela",
      nickName: "Adel",
      image: "/src/assets/member/oshi-adel.jpg",
    },
    {
      id: 2,
      name: "Azizi Asadel",
      nickName: "Zee",
      image: "/src/assets/member/oshi-zee.jpg",
    },
    {
      id: 3,
      name: "Shani Indira Natio",
      nickName: "Shani",
      image: "/src/assets/member/oshi-shani.jpg",
    },
    {
      id: 4,
      name: "Marsha Lenathea",
      nickName: "Marsha",
      image: "/src/assets/member/oshi-marsha.jpg",
    },
    {
      id: 5,
      name: "Freyana Jayawardhana",
      nickName: "Freya",
      image: "/src/assets/member/oshi-freya.jpg",
    },
  ];

  const user = {
    id: 1,
    noIdentity: "3279022505030002",
    name: "Dimas Firmansyah",
    birth: "2003-05-25",
    oshimen: members[0],
    phone: "087735495185",
    email: "dimas@gmail.com",
    password: "12345678",
    gender: "Laki-Laki",
  };

  return (
    <>
      {openPopUp && (
        <div className="bg-black bg-opacity-80 w-full h-screen fixed top-0 p-0 m-0 flex justify-center items-center">
          <div className="flex flex-col items-center justify-between bg-white w-3/4 h-3/4 rounded-xl p-2">
            <XCircle
              className="bg-white text-red-600 rounded-full absolute top-16 right-36 cursor-pointer p-0.5"
              size={42}
              onClick={() => {
                setOpenPopUp(!openPopUp);
                console.log(openPopUp);
              }}
            />
            <div className="flex justify-start items-center h-16 px-6 bg-red-600 w-full text-white font-abel font-bold rounded-lg text-2xl">
              EDIT DATA ANGGOTA
            </div>
            <form
              action="#"
              className="flex gap-4 w-full p-2 font-abel font-bold pb-8"
            >
              <div className="flex items-center justify-center w-full flex-wrap gap-4">
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  Nama Lengkap
                  <input
                    type="text"
                    value={user.name}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
                <label htmlFor="" className="flex gap-16 w-full px-1">
                  <div className="flex flex-col gap-2">
                    Jenis Kelamin
                    <div className="flex flex-row gap-8 w-full px-1">
                      <label htmlFor="">
                        <input type="radio" /> Laki-Laki
                      </label>
                      <label htmlFor="">
                        <input type="radio" /> Perempuan
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    Tanggal Lahir
                    <input type="date" value={user.birth} />
                  </div>
                </label>
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  No. Identitas
                  <input
                    type="text"
                    value={user.noIdentity}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  No. Handphone
                  <input
                    type="text"
                    value={user.phone}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
              </div>
              <div className="flex items-center justify-center w-full flex-wrap gap-4">
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  Email
                  <input
                    type="text"
                    value={user.email}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  Password
                  <input
                    type="password"
                    value={user.password}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  Oshimen
                  <select
                    name=""
                    id=""
                    className="p-2 border-2 border-black w-full rounded-lg"
                  >
                    <option value="">Reva Fidela</option>
                    <option value="">Azizi Shafa Asadel</option>
                    <option value="">Shani Indira Natio</option>
                    <option value="">Freyana Jayawardhana</option>
                  </select>
                </label>
                <div className="flex flex-row gap-2 w-full px-1">
                  <button
                    className=" bg-red-600 h-12 rounded-lg text-white w-full"
                    onClick={() => setOpenPopUp(!openPopUp)}
                  >
                    Batal
                  </button>
                  <button 
                    className=" bg-red-600 h-12 rounded-lg text-white w-full"
                    onClick={() => setOpenPopUp(!openPopUp)}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <Header />
      <main className="flex p-4">
        <div className="w-5/12 p-4">
          <img
            className="w-full rounded-lg"
            src={user.oshimen.image}
            alt="Oshi"
          />
        </div>
        <div className="flex flex-col w-full p-4 gap-4">
          <div className="flex justify-start items-center h-16 px-6 bg-red-600 w-full text-white font-abel font-bold rounded-lg text-2xl">
            MY PAGE
          </div>
          <div className="flex flex-col p-2">
            <table className="font-dosis font-bold text-md justify-start">
              <tr className="border-b-2 border-gray-200">
                <td className="w-2/5 p-4">Nomor Anggota</td>
                <td className="">12345678</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Jenis Keanggotaan</td>
                <td className="">Anggota Gratis</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Anggota yang paling disukai (Oshimen)</td>
                <td className="">{user.oshimen.name}</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Jumlah kedatangan thetaer</td>
                <td className="">0 Kali</td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Barcode</td>
                <td className="">
                  <img
                    src="/src/assets/profile/barcode-adel.gif"
                    alt="Barcode"
                    className="w-1/2 p-2"
                  />
                </td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Jumlah JKT48 Points</td>
                <td className="p-2">
                  <p>0 P</p>
                  <p>Point berlaku sementara</p>
                  <p>Berlaku hingga 31 Desember 2024</p>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-200">
                <td className="p-4">Bonus Points</td>
                <td className="p-2">
                  <p>0 P</p>
                  <p>Point berlaku sementara</p>
                  <p>Berlaku hingga 31 Desember 2024</p>
                </td>
              </tr>
            </table>
          </div>
          <div className="flex justify-start items-center h-16 px-6 bg-red-600 w-full text-white font-abel font-bold rounded-lg text-2xl">
            MENU ANGGOTA
          </div>
          <div className="flex flex-col p-2">
            <table className="font-dosis font-bold text-md justify-start">
              <tbody>
                <tr className="border-b-2 border-gray-200">
                  <td className="w-2/5 p-4">Email</td>
                  <td className="">{user.email}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Kata Sandi</td>
                  <td className="">{user.password}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Nama Lengkap</td>
                  <td className="">{user.name}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Anggota yang paling disukai (Oshimen)</td>
                  <td className="">{user.oshimen.name}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Jenis Kelamin</td>
                  <td>{user.gender}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Tanggal Lahir</td>
                  <td>{user.birth}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">
                    Nomor Identitas <br /> (KTP, Kartu Pelajar, SIM, atau
                    paspor)
                  </td>
                  <td>{user.noIdentity}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">No. Handphone</td>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <td className="p-4 text-center" colSpan={2}>
                    <button
                      className="w-1/2 bg-red-600 h-12 rounded-lg text-white"
                      onClick={() => setOpenPopUp(!openPopUp)}
                    >
                      Ubah Data
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
