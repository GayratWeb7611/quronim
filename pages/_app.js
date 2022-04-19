import { AppWrapper } from "../Context/AppContext";
import "../styles/globals.css";
import "../styles/times.scss";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Script from "next/script";
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-NHN4C82NEZ`}
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-NHN4C82NEZ');
        `}
      </Script>
      <Component {...pageProps} />
      <footer>
        <h3>
          <a href="https://www.albison.uz/">Powered by Albison</a>
        </h3>
      </footer>
    </AppWrapper>
  );
}

export default MyApp;
