import React, { ReactNode } from "react";
import Footer from "./footer";
import NavbarMB from "./navbarmb";
import NavbarPC from "./navbarpc";
import type { ReactElement } from "react";
import ScrollToTop from "react-scroll-to-top";
import Head from "next/head";

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
  content_Google?: string;
  icon_href?: string;
  url_facebook?: string;
  title_facebook?: string;
  description_facebook?: string;
  image_facebook?: string;
};

const Layout = ({
  children,
  title,
  description,
  content_Google,
  url_facebook,
  title_facebook,
  description_facebook,
  image_facebook,
}: Props) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="googlebot" content="translate" />
      <meta name="verify-v1" content="unique-string" />
      <meta name="google" content={content_Google} />
      <title>{title}</title>
      <meta name="googlebot" content="index, follow" />
      <meta name="robots" content="index, follow" />
      <link rel="icon" href="/criti_logo.png" />
      <meta property="og:url" content={url_facebook} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title_facebook} />
      <meta property="og:description" content={description_facebook} />
      <meta property="og:image" content={image_facebook} />
      <meta property="fb:app_id" content="1707983096240371" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@flickr" />
      <meta name="twitter:title" content={title_facebook} />
      <meta name="twitter:description" content={description_facebook} />
      <meta name="twitter:image" content={image_facebook} />
    </Head>
    <NavbarMB />
    <NavbarPC />
    {children}
    <div className="ScrollToTop">
      <ScrollToTop smooth color="#6f00ff" style={{ left: "30px" }} />
    </div>
    <Footer />
  </>
);

export default Layout;
