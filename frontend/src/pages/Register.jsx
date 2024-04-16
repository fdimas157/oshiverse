import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="w-full fixed">
        <img src="/src/assets/background/regis.png" alt="register-bg" />
      </div>
      <main className="w-full h-screen absolute top-0 left-0 flex flex-row">
        <div className="w-4/12 h-screen p-4"></div>
        <div className="w-8/12 h-screen flex flex-col p-8">
          <div className="font-outfit font-bold text-4xl text-red-600 py-4">
            Daftar Akun Baru
          </div>
          <form
            action=""
            className="bg-gray-100/10 w-full h-full rounded-3xl p-8 flex gap-4 flex-col items-center justify-center"
          >
            <div className="flex flex-row gap-8 w-full">
              <div className="w-1/2 flex flex-col gap-4">
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Nama Lengkap</label>
                  <input
                    type="text"
                    className="h-10 border-b border-black bg-gray-100/10 p-4"
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Tanggal Lahir</label>
                  <input
                    type="date"
                    className="h-10 border-b border-black bg-gray-100/10 p-4"
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Alamat Lengkap</label>
                  <input
                    type="text"
                    className="h-10 border-b border-black bg-gray-100/10 p-4"
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Jenis Kelamin</label>
                  <input
                    type="text"
                    className="h-10 border-b border-black bg-gray-100/10 p-4"
                  />
                </span>
              </div>
              <div className="w-1/2 flex flex-col gap-4">
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="h-10 border-b border-black bg-gray-100/10 p-4"
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Kata Sandi</label>
                  <input
                    type="password"
                    className="h-10 border-b border-black bg-gray-100/10 p-4"
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">No. Identitas</label>
                  <input
                    type="number"
                    className="h-10 border-b border-black bg-gray-100/10 p-4"
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">No. Handphone</label>
                  <input
                    type="number"
                    className="h-10 border-b border-black bg-gray-100/10 p-4"
                  />
                </span>
              </div>
            </div>
            <div className="font-outfit text-black text-sm">
              Anda menyetujui semua syarat dan ketentuan yang berlaku selama
              anda menjadi officiall fans club
            </div>
            <Link
              to={"/jkt48"}
              className="bg-red-600 text-white font-outfit font-bold h-12 w-1/2 rounded flex justify-center"
            >
              <button>DAFTAR</button>
            </Link>
            <div className="font-outfit text-black text-sm">
              Sudah punya akun?{" "}
              <Link
                to={"/jkt48/login"}
                className="underline font-bold hover:text-red-600"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
