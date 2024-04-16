import Header from "../components/Header";
import SideNews from "../components/SideNews";
import SideSchedule from "../components/SideSchedule";

export default function Theater() {
  return (
    <>
      <Header />
      <h1>Ini adalah halaman Theater</h1>
      <div className="flex flex-row w-full bg-white">
        <div className="w-1/4 bg-white p-4">
          <SideNews />
          <SideSchedule />
        </div>
        <div className="w-3/4 bg-white"></div>
      </div>
    </>
  );
}
