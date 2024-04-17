import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [idolMember, setIdolMember] = useState([]);
  const [user, setUser] = useState([]);
  const [editUser, setEditUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/get-all-idol-member`)
      .then((response) => response.json())
      .then((member) => setIdolMember(member));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editUser),
    })
      .then(async (response) => response.json())
      .then((data) => {
        setUser([...user, data.user]);
        navigate("/jkt48");
      });
  }

  return (
    <>
      <div className="w-full fixed">
        <img src="/src/assets/background/regis.png" alt="register-bg" />
      </div>
      <main className="w-full h-screen absolute top-0 left-0 flex flex-row">
        <div className="w-4/12 h-screen p-4"></div>
        <div className="w-8/12 h-screen flex flex-col pt-4">
          <div className="font-outfit font-bold text-4xl text-red-600">
            Daftar Akun Baru
          </div>
          <form
            onSubmit={handleSubmit}
            action=""
            className="bg-gray-100/10 w-full h-full rounded-3xl p-8 pt-6 flex gap-4 flex-col items-center justify-center"
          >
            <div className="flex flex-row gap-8 w-full">
              <div className="w-1/2 flex flex-col gap-3">
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Nama Lengkap</label>
                  <input
                    type="text"
                    className="h-10 border-b border-black bg-gray-100/10 p-3"
                    onChange={(e) => {
                      setEditUser({ ...editUser, name: e.target.value });
                    }}
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Tanggal Lahir</label>
                  <input
                    type="date"
                    className="h-10 border-b border-black bg-gray-100/10 p-3"
                    onChange={(e) =>
                      setEditUser({ ...editUser, birth: e.target.value })
                    }
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Alamat Lengkap</label>
                  <input
                    type="text"
                    className="h-10 border-b border-black bg-gray-100/10 p-3"
                    onChange={(e) =>
                      setEditUser({ ...editUser, address: e.target.value })
                    }
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Jenis Kelamin</label>
                  <input
                    type="text"
                    className="h-10 border-b border-black bg-gray-100/10 p-3"
                    onChange={(e) =>
                      setEditUser({ ...editUser, gender: e.target.value })
                    }
                  />
                </span>
              </div>
              <div className="w-1/2 flex flex-col gap-3">
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    className="h-10 border-b border-black bg-gray-100/10 p-3"
                    onChange={(e) =>
                      setEditUser({ ...editUser, email: e.target.value })
                    }
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">Kata Sandi</label>
                  <input
                    type="password"
                    className="h-10 border-b border-black bg-gray-100/10 p-3"
                    onChange={(e) =>
                      setEditUser({ ...editUser, password: e.target.value })
                    }
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">No. Identitas</label>
                  <input
                    type="number"
                    className="h-10 border-b border-black bg-gray-100/10 p-3"
                    onChange={(e) =>
                      setEditUser({ ...editUser, no_identity: e.target.value })
                    }
                  />
                </span>
                <span className="font-dosis font-bold text-sm flex flex-col gap-1">
                  <label htmlFor="">No. Handphone</label>
                  <input
                    type="number"
                    className="h-10 border-b border-black bg-gray-100/10 p-3"
                    onChange={(e) =>
                      setEditUser({ ...editUser, phone: e.target.value })
                    }
                  />
                </span>
              </div>
            </div>
            <label
              htmlFor=""
              className="flex justify-start w-full font-dosis font-bold text-sm"
            >
              Pilih Oshi Favoritmu
            </label>
            <select
              name="oshi"
              id="oshi"
              className="w-full bg-gray-100/10 border-b border-black font-dosis font-bold text-sm p-4 px-0 pt-0"
              onChange={(e) =>
                setEditUser({ ...editUser, oshi: e.target.value })
              }
            >
              {idolMember.map((m) => (
                <option value={m.id} key={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
            <div className="font-outfit text-black text-sm">
              Anda menyetujui semua syarat dan ketentuan yang berlaku selama
              anda menjadi officiall fans club
            </div>
            <button
              to={"/jkt48"}
              className="bg-red-600 text-white font-outfit font-bold h-12 w-1/2 rounded flex justify-center items-center"
              onClick={() => {
                setEditUser({ ...editUser, logged: "true" });
              }}
            >
              DAFTAR
            </button>
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
