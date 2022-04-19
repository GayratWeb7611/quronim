//
import Head from "next/head";
import Surahs from "../../components/surah";
import Styles from "../../styles/detail.module.scss";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { params } = context;
  const [uzbek, audio, arabic] = await Promise.all([
    fetch(`https://api.alquran.cloud/v1/surah/${params.number}/uz.sodik`)
      .then((res) => res.json())
      .then((data) => data.data),
    fetch(`https://api.alquran.cloud/v1/surah/${params.number}/ar.alafasy`)
      .then((res) => res.json())
      .then((data) => data.data),
    fetch(`http://api.alquran.cloud/v1/surah/${params.number}`)
      .then((res) => res.json())
      .then((data) => data.data),
  ]);

  return {
    props: {
      data: uzbek,
      dataAudio: audio,
      dataArabic: arabic,
    },
  };
}

import image from "../../public/images/bg2.png";
import Image from "next/image";

export default function Surah({ data, dataAudio, dataArabic }) {
  return (
    <div>
      <Head>
        <title>{data.englishName}</title>
        <meta name="description" content="To'liq Qur'on Karim" />
        <meta
          property="og:description"
          content="Куьрон китоби, узбекча ва арабча талкинда."
        />
        <meta property="og:title" content="Куьрон китоби" />
        <meta property="og:site_name" content="Quronim.uz" />
        <meta property="og:image" content="/ikonka.jpg" />
        <meta
          name="description"
          content="Куьрон китоби, узбекча ва арабча талкинда."
        />
        <meta property="og:url" content="https://www.quronim.uz/" />
        <meta name="keywords" content="quron, quronim, quronim uz, quron uz" />
        <meta name="keywords" content={`${data.englishName}, ${data.name}`} />
        <link rel="icon" href="/ikonka.jpg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>

      <div className="headDetail">
        <Link href={"/surahs"}>
          <i className="fa-solid fa-angles-left"></i>
        </Link>
        <Link href={"/"}>
          <i className="fa-solid fa-house"></i>
        </Link>
      </div>

      <h2 className={Styles.nameSurah}>
        {data.englishName + " --- " + data.name}
      </h2>
      <img src="./images/bg2.png" alt="" />

      <div>
        <ul className={Styles.wrapItems}>
          {data.ayahs.map((ayah, index) => (
            <li key={index} className={Styles.itemDetail}>
              {console.log(ayah)}
              <p className={Styles.circle}>{index + 1}</p>
              <Surahs
                key={ayah.number}
                ayahIndex={ayah.number}
                text={ayah.text}
                audio={dataAudio.ayahs[index].audio}
                arabic={dataArabic.ayahs[index].text}
              ></Surahs>
              <Image src={image} alt="asdas"  />
            </li>
          ))}
        </ul>
      </div>

      {console.log(data)}
    </div>
  );
}
