import { useState } from "react";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { MdInfo } from "react-icons/md";
import { IoMdHeart, IoMdTrash } from "react-icons/io";

export default function ListCart() {
  const [checked, setChecked] = useState(false);
  const [order, setOrder] = useState(1);

  return (
    <>
      <div className="flex flex-row border border-black p-2 rounded-lg">
        <div className="flex flex-col p-2 gap-2 w-full ">
          <div className="flex flex-row items-center gap-2 font-abel font-bold ">
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
              <div className="text-xl">
                JKT48 Newera Official T-Shirt Shani Black
              </div>
              <div className="text-xs">Ukuran L, 1</div>
            </div>
            <div className="font-abel font-bold flex flex-col items-end gap-2 w-5/12 ">
              <div className="text-2xl">Rp. 100.000</div>
              <div className="flex flex-row gap-1 items-center">
                <MdInfo size={20} />
                <IoMdHeart size={20} />
                <IoMdTrash size={20} />
                <div className="flex flex-row gap-2">
                  <button
                    className="w-5 h-5 flex justify-center items-center rounded-full font-extrabold border-2 border-black"
                    onClick={() => {
                      if (order < 2) {
                        confirm(
                          "Apakah anda ingin menghapus pesanan ini dari keranjang?"
                        );
                      } else if (order > 0) {
                        setOrder(order - 1);
                      } else {
                        setOrder(0);
                      }
                    }}
                  >
                    -
                  </button>
                  <div className="w-12 h-5 border-2 border-black text-xs rounded flex justify-center items-center font-dosis">
                    {order}
                  </div>
                  <button
                    className="w-5 h-5 flex justify-center items-center rounded-full font-extrabold border-2 border-black"
                    onClick={() => setOrder(order + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
