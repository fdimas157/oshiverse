import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

export const AuthContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({});

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Outlet />
      <Footer />
    </AuthContext.Provider>
  );
}
