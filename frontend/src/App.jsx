import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export const AuthContext = createContext();

export default function App() {
  // const [backgroundHeader, setBackgroundHeader] = useState(true);
  const [cart, setCart] = useState([{ id: 1, nameProduct: "Dimas" }]);

  return (
    <>
      {/* <Header
        backgroundHeader={backgroundHeader}
        setBackgroundHeader={setBackgroundHeader}
      /> */}
      <Outlet cart={cart} setCart={setCart} />
      <Footer />
    </>
  );
}
