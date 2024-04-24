import { XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Profile() {
  const [openPopUp, setOpenPopUp] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const [currentOshiName, setCurrentOshiName] = useState();
  const [idolMember, setIdolMember] = useState([]);
  const [getOshi, setGetOshi] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/get-all-idol-member`)
      .then((response) => response.json())
      .then((member) => setIdolMember(member));
  }, []);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/v1/get-user/${localStorage.getItem(
        "currentUser"
      )}`
    )
      .then((response) => response.json())
      .then((currentUser) => setCurrentUser(currentUser));
  }, []);

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }/v1/get-idol-member/${localStorage.getItem("currentOshi")}`
    )
      .then((response) => response.json())
      .then((oshiName) => {
        setCurrentOshiName(oshiName.name);
        setGetOshi(oshiName);
        localStorage.setItem("oshi", oshiName);
      });
  }, []);

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
              <div className="flex items-center justify-center w-full flex-wrap gap-2 ">
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  Nama Lengkap
                  <input
                    type="text"
                    value={currentUser.name}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  Tanggal Lahir
                  <input
                    type="date"
                    value={currentUser.birth}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  Jenis Kelamin
                  <input
                    type="text"
                    value={currentUser.gender}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  Alamat Lengkap
                  <input
                    type="text"
                    value={currentUser.address}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
              </div>
              <div className="flex items-center justify-center w-full flex-wrap gap-4 ">
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  Email
                  <input
                    type="text"
                    value={currentUser.email}
                    className="p-2 border-2 border-black w-full rounded-lg"
                  />
                </label>
                <label htmlFor="" className="flex flex-col gap-2 w-full px-1">
                  No. Handphone
                  <input
                    type="text"
                    value={currentUser.phone}
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
                    {idolMember.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="flex flex-row gap-2 w-full px-1 ">
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
            src={getOshi.img_main}
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
                <td className="">{currentOshiName}</td>
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
                  <td className="">{currentUser.email}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Nama Lengkap</td>
                  <td className="">{currentUser.name}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Anggota yang paling disukai (Oshimen)</td>
                  <td className="">{currentOshiName}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Jenis Kelamin</td>
                  <td>{currentUser.gender}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Tanggal Lahir</td>
                  <td>{currentUser.birth}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">Alamat Lengkap</td>
                  <td>{currentUser.address}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">
                    Nomor Identitas <br /> (KTP, Kartu Pelajar, SIM, atau
                    paspor)
                  </td>
                  <td>{currentUser.no_identity}</td>
                </tr>
                <tr className="border-b-2 border-gray-200">
                  <td className="p-4">No. Handphone</td>
                  <td>{currentUser.phone}</td>
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
