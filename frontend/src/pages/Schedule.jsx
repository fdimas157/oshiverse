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
              <div className="font-outfit font-bold text-7xl">20</div>
              <div className="font-outfit font-bold text-3xl">April</div>
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
            <table className="w-full text-sm cursor-pointer">
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
                  <th className="border border-red-600 p-2 h-24 "></th>
                  <th className="border border-red-600">1</th>
                  <th className="border border-red-600">2</th>
                  <th className="border border-red-600">3</th>
                  <th className="border border-red-600">4</th>
                  <th className="border border-red-600">5</th>
                  <th className="border border-red-600">6</th>
                </tr>
                <tr>
                  <th className="border border-red-600 p-2 h-24">7</th>
                  <th className="border border-red-600">8</th>
                  <th className="border border-red-600">9</th>
                  <th className="border border-red-600">10</th>
                  <th className="border border-red-600">11</th>
                  <th className="border border-red-600">12</th>
                  <th className="border border-red-600">13</th>
                </tr>
                <tr>
                  <th className="border border-red-600 p-2 h-24">14</th>
                  <th className="border border-red-600">15</th>
                  <th className="border border-red-600">16</th>
                  <th className="border border-red-600">17</th>
                  <th className="border border-red-600">18</th>
                  <th className="border border-red-600">19</th>
                  <th className="border border-red-600 bg-red-600 text-white font-bold">
                    20
                  </th>
                </tr>
                <tr>
                  <th className="border border-red-600 p-2 h-24">21</th>
                  <th className="border border-red-600">21</th>
                  <th className="border border-red-600">22</th>
                  <th className="border border-red-600">23</th>
                  <th className="border border-red-600">24</th>
                  <th className="border border-red-600">25</th>
                  <th className="border border-red-600">26</th>
                </tr>
                <tr>
                  <th className="border border-red-600 p-2 h-24">27</th>
                  <th className="border border-red-600">28</th>
                  <th className="border border-red-600">29</th>
                  <th className="border border-red-600">30</th>
                  <th className="border border-red-600"></th>
                  <th className="border border-red-600"></th>
                  <th className="border border-red-600"></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
