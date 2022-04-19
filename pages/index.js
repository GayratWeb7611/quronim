import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qur'oni Karim || Home</title>
        <meta
          name="description"
          content="Куьрон китоби, узбекча ва арабча талкинда."
        />
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
        <link rel="icon" href="/ikonka.jpg" />
      </Head>
      <img
        className="yozuv"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shahadah-1.svg/1200px-Shahadah-1.svg.png"
        alt=""
      />
      <Link href={"/surahs"}>Qur'on</Link>
      <Link href={"/times"}>Namoz Vaqtlari</Link>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
