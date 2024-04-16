import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="w-full fixed">
        <img src="/src/assets/background/login-bg.jpeg" alt="login-bg" />
      </div>
      <main className="w-full h-screen absolute top-0 left-0 ">
        <div className="flex flex-row">
          <div className="flex h-screen w-7/12 items-start p-16 flex-col justify-center gap-4">
            <div className="font-outfit text-white text-3xl font-semibold">
              Mulai Petualanganmu di
            </div>
            <div className="font-outfit text-white text-7xl font-bold">
              JKT48 Universe
            </div>
            <div className="font-outfit text-white text-md">
              Masuki dunia penuh keajaiban dan petualangan di JKT48 Universe.
              Jelajahi berbagai ftur dan konten menarik yang tersedia untuk
              menciptakan pengalaman tak terlupakan.
            </div>
          </div>
          <div className="w-5/12">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="bg-gray-500/40 w-3/4 h-5/6 rounded-3xl flex flex-col justify-center items-center gap-8">
                <div className="text-white font-outfit font-bold text-3xl flex justify-center items-center flex-col gap-2">
                  - Selamat Datang - <br />
                  <span className="text-xs font-normal">
                    Silahkan login untuk memulai keseruan di dunia JKT48
                  </span>
                </div>
                <form
                  action=""
                  className="flex flex-col gap-6 w-3/4 font-dosis justify-center items-center "
                >
                  <input
                    type="text"
                    placeholder="Masukan email...."
                    className="w-11/12 h-9 px-4 rounded-lg border-none font-bold bg-gray-500/10 text-white"
                  />{" "}
                  <label
                    htmlFor=""
                    className="w-11/12 text-center flex justify-center items-center flex-col gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Masukan password...."
                      className="h-9 w-full px-4 rounded-lg border-none font-bold bg-gray-500/10 text-white "
                    />{" "}
                    <span className="text-xs font-normal font-outfit text-white underline cursor-pointer">
                      Lupa Password?
                    </span>
                  </label>
                  <button className="bg-white border-none h-10 rounded-lg font-outfit font-bold text-lg w-3/4">
                    <Link to={"/jkt48/"}>MASUK</Link>
                  </button>
                  <div className="text-white flex gap-2 font-outfit">
                    Belum punya akun?
                    <Link to={"/jkt48/register"} className="underline">
                      Daftar
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
