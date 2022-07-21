import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomePage from "./home/index";
import NavbarPC from "./components/navbarpc";
import NavbarMB from "./components/navbarmb";
import Footer from "./components/footer";
import ScrollToTop from "react-scroll-to-top";

const Home: NextPage = (props) => {
  return (
    <div className="my-wesite">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Criti Studio là nhà thiết kế Games, Phim 3D, AI & Website hàng đầu. Với nền tảng chúng tôi cung cấp, người dùng có thể trải nghiệm và sử dụng những sản phẩm tốt nhất trên cả PC và Mobile"
        />
        <meta name="googlebot" content="translate" />
        <meta
          name="google-site-verification"
          content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="
        />
        <meta name="google" content="lam game app thiet ke wesite" />
        <title>
          Criti Studio | Thiết Kế Game | Phim 3D | AI | Thiết Kế Website App
          Mobile |
        </title>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="icon" href="/criti_logo.png" />
      </Head>
      <div>
        <div className="nav-pc">
          <NavbarPC />
        </div>
        <div className="nav-mobile">
          <NavbarMB />
        </div>
        <HomePage />
        <div className="ScrollToTop">
          <ScrollToTop smooth color="#6f00ff" style={{ left: "30px" }} />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
