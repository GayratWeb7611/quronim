import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/list.module.scss";

export const getStaticProps = async () => {
  const response = await fetch("http://api.alquran.cloud/v1/surah");
  const data = await response.json();
  return {
    props: {
      data: data.data,
    },
  };
};
export default function Surahs({ data }) {
  return (
    <div>
      <Head>
        <title>Qur'oni Karim || List</title>
        <meta
          name="description"
          content="Куьрон китоби, узбекча ва арабча талкинда."
        />
        <meta
          property="og:description"
          content="Куьрон китоби, узбекча ва арабча талкинда."
        />
        <meta property="og:title" content="Курьон китоби" />
        <meta property="og:site_name" content="Quronim.uz" />
        <meta property="og:image" content="/ikonka.jpg" />
        <meta
          name="description"
          content="Куьрон китоби, узбекча ва арабча талкинда."
        />
        <meta property="og:url" content="https://www.quronim.uz/" />
        <meta name="keywords" content="quron, quronim, quronim uz, quron uz" />
        <link rel="icon" href="/ikonka.jpg" />
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

      <ul className={styles.wrapList}>
        {data.map((sura, index) => {
          console.log(sura);
          return (
            <>
              <li key={index}>
                <Link href={`/surahs/${sura.number}`}  >
                  <a>
                    <span></span>
                    {sura.number + "   " + sura.englishName}
                  </a>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
