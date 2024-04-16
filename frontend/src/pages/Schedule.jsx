import Header from "../components/Header";
import SideNews from "../components/SideNews";

export default function Schedule() {
  return (
    <>
    <Header />
      <div className="flex flex-row w-full bg-white">
        <div className="w-1/4 bg-white p-4">
          <SideNews />
        </div>
        <div className="w-3/4">
          <div className="flex flex-row p-4 gap-8">
            <div className="flex flex-col justify-center items-center">
              <div className="font-outfit font-bold text-7xl">24</div>
              <div className="font-outfit font-bold text-3xl">Februari</div>
            </div>
            <div className="flex flex-col">
              <div className="font-outfit font-bold text-2xl">Next Event</div>
              <div className="font-dosis">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quae unde mollitia molestias fugiat molestiae voluptate autem
                rem voluptatibus aliquid, dicta nesciunt libero incidunt ratione
                eos aliquam error reprehenderit repellat. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Odio reprehenderit beatae
                obcaecati, odit asperiores harum autem sapiente suscipit,
                assumenda voluptates, soluta doloribus amet qui in fugit nihil
                delectus! Mollitia, quasi?
              </div>
            </div>
          </div>
          <div className="p-4">
            <table className="w-full text-sm">
              <thead className="border border-red-600">
                <tr>
                  <th className="bg-red-600 text-white p-2" colSpan={7}>
                    April
                  </th>
                </tr>
                <tr>
                  <th className="border border-red-600 p-2">Minggu</th>
                  <th className="border border-red-600 p-2">Senin</th>
                  <th className="border border-red-600 p-2">Selasa</th>
                  <th className="border border-red-600 p-2">Rabu</th>
                  <th className="border border-red-600 p-2">Kamis</th>
                  <th className="border border-red-600 p-2">Jumat</th>
                  <th className="border border-red-600 p-2">Sabtu</th>
                </tr>
              </thead>
              <tbody className="font-abel">
                <tr>
                  <th className="border border-red-600 h-24 "></th>
                  <th className="border border-red-600 h-24 flex p-2">1</th>
                  <th className="border border-red-600 h-24 flex p-2 flex-row">2</th>
                  <th className="border border-red-600 p-2">3</th>
                  <th className="border border-red-600 p-2">4</th>
                  <th className="border border-red-600 p-2">5</th>
                  <th className="border border-red-600 p-2">6</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
