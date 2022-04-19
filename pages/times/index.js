import Head from "next/head";
import Link from "next/link";
import TimeCard from "../../components/timesCard";
import { useState, useEffect } from "react";

export default function Times() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/hello");
      const data = await response.json();
      if (Array.isArray(data?.data)) setTimes(data.data);
    })();
  }, []);
  if (!times) {
    return <div>loading</div>;
  }
  let time = [times[0], times[2], times[3], times[4], times[5]];
  let hours = new Date().getHours();
  let current;
  let current_strelka;
  if (hours <= Number(time[0]?.time.slice(0, 2))) {
    current = "Тонг";
    current_strelka = "rot180";
  } else if (hours <= Number(time[1]?.time.slice(0, 2))) {
    current = "Пешин";
    current_strelka = "rot250";
  } else if (hours <= Number(time[2]?.time.slice(0, 2))) {
    current = "Аср";
    current_strelka = "rot315";
  } else if (hours <= Number(time[3]?.time.slice(0, 2))) {
    current = "Шом";
    current_strelka = "rot405";
  } else if (hours <= Number(time[4]?.time.slice(0, 2))) {
    current = "Хуфтон";
    current_strelka = "rot470";
  } else {
    current = null;
  }
  const all_times = [
    {
      en: "Fajr",
      uz: "Тонг",
    },
    {
      en: "Dhuhr",
      uz: "Пешин",
    },
    {
      en: "Asr",
      uz: "Аср",
    },

    {
      en: "Maghrib",
      uz: "Шом",
    },
    {
      en: "Isha",
      uz: "Хуфтон",
    },
  ];

  return (
    <>
      <Head>
        <title>Namoz Vaqtlari</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <div className="headList">
        <Link href={"/"}>
          <i className="fa-solid fa-house"></i>
        </Link>
      </div>
      <div className="time-body">
        <div className="times">
          {all_times.map((single_time, index) => (
            <TimeCard
              key={single_time.en}
              current={current}
              time={time[index]}
              tip={single_time}
            />
          ))}
          <div className={`strelka ${current_strelka}`}></div>
        </div>
      </div>
    </>
  );
}
