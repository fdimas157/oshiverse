/* eslint-disable react/prop-types */
import { XCircle } from "lucide-react";
import { useState } from "react";
export default function PopUpProduct({
  popUpProduct,
  popUpDataProduct,
  setPopUpProduct,
  setTotalCart,
  cart,
  setCart,
}) {
  const [order, setOrder] = useState(1);
  const [size, setSize] = useState("L");

  return (
    <>
      <div className="bg-black bg-opacity-80 w-full h-screen fixed top-0 left-0 p-0 m-0 flex justify-center items-center">
        <div className="flex flex-row items-center justify-between bg-white w-9/12 h-3/4 rounded-xl p-4 gap-4">
          <XCircle
            className="bg-white text-red-600 rounded-full absolute top-16 right-36 cursor-pointer p-0.5"
            size={42}
            onClick={() => {
              setPopUpProduct(!popUpProduct);
            }}
          />
          <div className="w-6/12">
            <img
              src={popUpDataProduct.image}
              alt={popUpDataProduct.name_product}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="flex flex-col justify-center font-ptsans w-9/12 px-4">
            <div className="px-2 w-full text-black font-abel font-extrabold rounded-lg text-2xl">
              {popUpDataProduct.name_product}
            </div>
            <div className="px-2 font-ptsans text-xs pt-1">Terjual 1000+</div>
            <div className="px-2 font-abel font-bold border-b border-black pb-2 pt-2 text-5xl">
              Rp. {popUpDataProduct.price}
            </div>
            <div className="px-2 font-ptsans text-sm pt-2">Pilih size : L</div>
            <div className="flex flex-row px-2 gap-6 pt-2 text-xs">
              <button
                className="border-2 border-black h-8 w-8 rounded-full hover:border-red-600"
                onClick={() => setSize("S")}
              >
                S
              </button>
              <button
                className="border-2 border-black h-8 w-8 rounded-full hover:border-red-600"
                onClick={() => setSize("M")}
              >
                M
              </button>
              <button
                className="border-2 border-black h-8 w-8 rounded-full hover:border-red-600"
                onClick={() => setSize("L")}
              >
                L
              </button>
              <button
                className="border-2 border-black h-8 w-8 rounded-full hover:border-red-600"
                onClick={() => setSize("XL")}
              >
                XL
              </button>
              <button
                className="border-2 border-black h-8 w-8 rounded-full hover:border-red-600"
                onClick={() => setSize("XXL")}
              >
                XXL
              </button>
            </div>
            <div className="px-2 font-ptsans text-sm pt-2 underline">
              Detail Product
            </div>
            <div className="text-xs text-justify px-2 pt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae unde harum saepe distinctio temporibus quidem omnis,
              quisquam culpa ipsa voluptates, animi praesentium veniam similique
              mollitia provident libero assumenda rerum rem. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Pariatur laborum voluptatem
              odio iste assumenda cupiditate architecto, illo eligendi debitis
              placeat perspiciatis sint tempore aut consequatur dicta! Accusamus
              ratione hic consequuntur. lores sint tempore aut consequatur
              dicta! Accusamus ratione hic consequuntur. lore
            </div>
            <div className="px-2 pt-4 flex flex-row gap-2 text-white ">
              <button
                className="w-1/12 bg-red-600 rounded-lg"
                onClick={() => {
                  if (order > 0) {
                    setOrder(order - 1);
                  } else {
                    setOrder(0);
                  }
                }}
              >
                -
              </button>
              <button
                className="bg-red-600 w-10/12 h-12 rounded-lg"
                onClick={() => {
                  setCart([
                    ...cart,
                    {
                      ...popUpDataProduct,
                      size,
                      order,
                      user: localStorage.getItem("currentUser"),
                    },
                  ]);
                  setTotalCart(cart.length + 1);
                  setPopUpProduct();
                  console.log(cart);
                }}
              >
                {order} pcs ukuran {size}
              </button>
              <button
                className="w-1/12 bg-red-600 rounded-lg"
                onClick={() => {
                  setOrder(order + 1);
                  console.log(order);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
