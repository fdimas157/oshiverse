import { useEffect, useState } from "react";
import HeaderShop from "../components/HeaderShop";
import ListCart from "../components/ListCart";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function MerchandiseCart() {
  const [checked, setChecked] = useState(false);
  const [cart, setCart] = useState([]);
  console.log(cart);
  const tShirt = [
    {
      id: 1,
      nameProduct: "JKT48 Newera Official T-Shirt Shani Black",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/black-shani-2.jpg",
    },
    {
      id: 2,
      nameProduct: "T-Shirt Indah Ash JKT48 Newera X Erigo",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/ash-indah.jpg",
    },
    {
      id: 3,
      nameProduct: "JKT48 Newera Official T-Shirt Zee Deep Skyblue",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/deep-sky-blue-zee.jpg",
    },
    {
      id: 4,
      nameProduct: "T-Shirt Graphite Christy JKT48 Newera X Erigo",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/graphite-christy.jpg",
    },
    {
      id: 5,
      nameProduct: "JKT48 Newera Official T-Shirt Maroon Crhisty",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/maroon-christy.jpg",
    },
    {
      id: 6,
      nameProduct: "JKT48 Newera Official T-Shirt Muthe Rice",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/rice-muthe.jpg",
    },
    {
      id: 7,
      nameProduct: "T-Shirt Callie Pebble JKT48 Newera X Erigo",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/pebble-callie.jpg",
    },
    {
      id: 8,
      nameProduct: "JKT48 Newera Official T-Shirt Olla Syrup",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/syrup-olla.jpg",
    },
    {
      id: 9,
      nameProduct: "JKT48 Newera Official T-Shirt Adel Seaweed",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/seaweed-adel.jpg",
    },
    {
      id: 10,
      nameProduct: "JKT48 Newera Official T-Shirt Gracia Sky Blue",
      price: 99000,
      image: "/src/assets/merchandise/t-shirt/sky-blue-gracia.jpg",
    },
  ];

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/v1/get-cart/${localStorage.getItem(
        "currentUser"
      )}`
    )
      .then((response) => response.json())
      .then((cart) => setCart(cart));
  }, []);

  return (
    <>
      <HeaderShop totalCart={cart.length} />
      <main className="p-2">
        <div className="w-full h-12 flex flex-row items-center gap-2 p-4 pb-0">
          <Link
            to="/jkt48/"
            className="border-b-2 border-white hover:border-black"
          >
            HOME
          </Link>
          <ChevronRight />
          <Link
            to="/jkt48/merchandise"
            className="border-b-2 border-white hover:border-black"
          >
            MERCHANDISE
          </Link>
          <ChevronRight />
          <Link
            to="/jkt48/merchandise"
            className="border-b-2 border-white hover:border-black"
          >
            CART
          </Link>
        </div>
        <div className="text-3xl text-black font-outfit font-bold p-4 border-b-2 border-black flex flex-col">
          KERANJANG
        </div>
        <div className="flex flex-row">
          <div className="w-9/12 flex flex-col p-2 gap-2">
            <ListCart cart={cart} />
          </div>
          <div className="w-/12 h-fit flex flex-col p-4 border-2 border-black rounded-xl m-2">
            <div className="text-xl text-black font-outfit font-bold p-4 border-b-2 border-black flex justify-center">
              RINCIAN BELANJA
            </div>
            <div className="flex flex-row font-outfit justify-between p-2 pt-4 font-bold">
              <div>Sub Total</div>
              <div>Rp. 1.000.000</div>
            </div>
            <div className="flex flex-row font-outfit justify-between p-2 pt-4">
              <div>Biaya Pengiriman</div>
              <div>Rp. 25.000</div>
            </div>
            <div className="flex flex-row font-outfit justify-between p-2">
              <div>Biaya Aplikasi</div>
              <div>Rp. 5.000</div>
            </div>
            <div className="flex flex-row font-outfit justify-between p-2">
              <div>JKT48 Points</div>
              <div>- Rp. 500.000</div>
            </div>
            <div className="flex flex-row font-outfit justify-between p-2">
              <div>Diskon</div>
              <div>Rp. 0</div>
            </div>
            <div className="flex flex-row font-outfit justify-between p-2 font-bold border-t-2 border-black">
              <div>Total</div>
              <div>Rp. 530.000</div>
            </div>
            <div className="flex flex-row justify-between items-center gap-2 p-2">
              <div>
                {checked ? (
                  <ImCheckboxChecked
                    onClick={() => setChecked(!checked)}
                    size={20}
                    className="cursor-pointer"
                  />
                ) : (
                  <ImCheckboxUnchecked
                    onClick={() => setChecked(!checked)}
                    size={20}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <div className="text-xs text-justify font-outfit">
                Dengan ini saya menyetujui semua syarat & ketentuan yang
                berlaku!
              </div>
            </div>
            <Link
              className="w-full flex justify-center p-2"
              to={"/jkt48"}
              onClick={() => alert("Maaf fitur ini belum bisa digunakan.")}
            >
              <button className="bg-black text-white p-2 w-64 hover:shadow-2xlxl">
                PROSES SELANJUTNYA
              </button>
            </Link>
          </div>
        </div>
        <div className="text-2xl text-black font-outfit font-bold p-4 border-b-2 border-black flex flex-col">
          REKOMENDASI UNTUKMU
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
          {tShirt.map((p) => (
            <Link
              className="w-56 flex flex-col gap-2 cursor-pointer"
              key={p.id}
              to={"/jkt48/merchandise"}
            >
              <img
                src={p.image}
                alt={p.nameProduct}
                className="w-full border-b-2 border-black hover:border-red-600 hover:border-2"
              />
              <div className="font-outfit text-center text-sm">
                {p.nameProduct}
              </div>
              <div className="font-reddit text-center font-bold text-sm text-red-600">
                <s className="text-black">Rp. 125.000</s> Rp. {p.price}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
