import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { MdInfo } from "react-icons/md";
import { IoMdHeart, IoMdTrash } from "react-icons/io";
import { useState } from "react";

export default function ListCart({ cart, setCart }) {
  const [checked, setChecked] = useState(false);
  const [orderAmount, setOrderAmount] = useState(1);

  return (
    <>
      {cart.map((c) => (
        <div className="flex flex-row border-b border-gray-300 p-2 " key={c.id}>
          <div className="flex flex-col p-2 gap-2 w-full ">
            <div className="flex flex-row items-center gap-2 font-outfit ">
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
              )}{" "}
              T-Shirt Birthday
            </div>
            <div className="flex flex-row items-center gap-2 justify-between">
              <img
                src="/src/assets/merchandise/t-shirt/ash-indah.jpg"
                alt=""
                className="w-16 rounded"
              />
              <div className="font-abel font-bold flex flex-col gap-2 w-7/12 ">
                <div className="text-xl">{c.nameProduct}</div>
                <div className="text-xs">
                  Ukuran {c.size}, {c.order}
                </div>
              </div>
              <div className="font-outfit flex flex-col items-end gap-2 w-5/12 ">
                <div className="text-xl">Rp. {c.price}</div>
                <div className="flex flex-row gap-1 items-center">
                  <MdInfo size={20} />
                  <IoMdHeart size={20} />
                  <IoMdTrash size={20} />
                  <div className="flex flex-row gap-2 font-bold">
                    <button
                      className="w-5 h-5 flex justify-center items-center rounded-full font-extrabold border-2 border-black"
                      onClick={() => {
                        if (orderAmount < 2) {
                          confirm(
                            "Apakah anda ingin menghapus pesanan ini dari keranjang?"
                          );
                        } else if (orderAmount > 0) {
                          setOrderAmount(orderAmount - 1);
                        } else {
                          setOrderAmount(0);
                        }
                      }}
                    >
                      -
                    </button>
                    <div className="w-12 h-5 border-2 border-black text-xs rounded flex justify-center items-center font-dosis">
                      {orderAmount}
                    </div>
                    <button
                      className="w-5 h-5 flex justify-center items-center rounded-full font-extrabold border-2 border-black"
                      onClick={() => setOrderAmount(orderAmount + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
