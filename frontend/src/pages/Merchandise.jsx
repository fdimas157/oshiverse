import { useEffect, useState } from "react";
import PopUpProduct from "../components/PopUpProduct";
import HeaderShop from "../components/HeaderShop";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Merchandise() {
  const [popUpProduct, setPopUpProduct] = useState();
  const [popUpDataProduct, setPopUpDataProduct] = useState({});
  const [totalCart, setTotalCart] = useState(0);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/product`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/cart`)
      .then((response) => response.json())
      .then((cart) => setCart(cart));
  }, []);

  return (
    <>
      <HeaderShop totalCart={cart.length} cart={cart} />
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
          {product.map((p) => (
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
                alt={p.name_product}
                className="w-full border-b-2 border-black hover:border-red-600 hover:border-2"
              />
              <div className="font-ptsans text-center text-sm">
                {p.name_product}
              </div>
              <div className="font-abel text-center font-bold text-sm text-black">
                Rp. {p.price}
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
