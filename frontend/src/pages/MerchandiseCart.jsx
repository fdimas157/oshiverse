import HeaderShop from "../components/HeaderShop";
import ListCart from "../components/ListCart";

export default function MerchandiseCart() {

  return (
    <>
      <HeaderShop />
      <main>
        <div className="text-3xl text-black font-outfit font-bold p-4 border-b-2 border-black flex flex-col">
          KERANJANG
        </div>
        <div className="flex flex-row">
          <div className="w-8/12 flex flex-col p-2 gap-2">
            <ListCart/>
            <ListCart/>
            <ListCart/>
            <ListCart/>
            <ListCart/>
          </div>
          <div className="bg-blue-100 w-4/12"></div>
        </div>
      </main>
    </>
  );
}
