import { useState } from "react";
import PopUpProduct from "../components/PopUpProduct";
import HeaderShop from "../components/HeaderShop";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Merchandise({ cart, setCart }) {
  const [popUpProduct, setPopUpProduct] = useState();
  const [popUpDataProduct, setPopUpDataProduct] = useState({});
  const [totalCart, setTotalCart] = useState(0);

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

  return (
    <>
      <HeaderShop totalCart={totalCart} cart={cart} />
      <main className="flex flex-col p-2">
        <div className="w-full h-12 flex flex-row items-center gap-2 p-4">
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
        </div>
        <div>
          <img src="/src/assets/merchandise/bg.png" alt="" />
        </div>
        <div className="font-outfit font-extrabold text-5xl text-center p-8">
          NEW ARRIVAL
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {tShirt.map((p) => (
            <div
              className="w-56 flex flex-col gap-2 cursor-pointer"
              key={p.id}
              onClick={() => {
                setPopUpProduct(!popUpProduct);
                setPopUpDataProduct(p);
              }}
            >
              <img
                src={p.image}
                alt={p.nameProduct}
                className="w-full border-b-2 border-black hover:border-red-600 hover:border-2"
              />
              <div className="font-ptsans text-center text-sm">
                {p.nameProduct}
              </div>
              <div className="font-reddit text-center font-bold text-sm text-red-600">
                <s className="text-black">Rp. 125.000</s> Rp. {p.price}
              </div>
            </div>
          ))}
        </div>
        {popUpProduct && (
          <PopUpProduct
            popUpProduct={popUpProduct}
            setPopUpProduct={setPopUpProduct}
            popUpDataProduct={popUpDataProduct}
            setTotalCart={setTotalCart}
            totalCart={totalCart}
            cart={cart}
            setCart={setCart}
          />
        )}
      </main>
    </>
  );
}
