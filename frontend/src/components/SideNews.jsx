export default function SideNews() {
  const news = [
    {
      id: 1,
      desc: "Pengumuman Mengenai Aktivitas Teater JKT48 Selama Bulan Ramadan 2024",
      date: "10 Maret 2024",
      type: "THEATER",
    },
    {
      id: 2,
      desc: "Pengumuman Mengenai Personal Meet & Greet Festival 2024 “Spring Has Come”",
      date: "5 Maret 2024",
      type: "EVENT",
    },
    {
      id: 3,
      desc: "Pengumuman Mengenai Pertunjukan Teater Kelulusan Shani Indira Natio",
      date: "5 Maret 2024",
      type: "THEATER",
    },
    {
      id: 4,
      desc: "Pengumuman Mengenai Shani Graduation Concert “Last Voyage”",
      date: "5 Maret 2024",
      type: "EVENT",
    },
    {
      id: 5,
      desc: "Pengumuman Mengenai Pertunjukan Terakhir Setlist (Senshuuraku) “Banzai JKT48”",
      date: "2 Maret 2024",
      type: "THEATER",
    },
  ];

  return (
    <aside className="flex flex-col items-center border-2 border-red-600 h-screen rounded-xl">
      <div className="w-full h-16 bg-red-600 rounded-t-lg flex justify-center items-center font-abel font-bold text-white text-2xl">
        NEWS
      </div>
      {news.map((n) => (
        <div key={n.id} className="flex flex-col font-dosis p-4 text-sm">
          <h4 className="font-bold ">{n.desc}</h4>
          <p className="border-b-2 border-red-600 font-abel">{n.date}</p>
        </div>
      ))}
      <button className="flex justify-center items-center rounded-lg bg-red-600 text-white w-44 h-12 cursor-pointer font-dosis font-bold">
        Selengkapnya
      </button>
    </aside>
  );
}
