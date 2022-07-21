import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarPC = () => {
  //lo gic cuộn navabar fixed
  const [navbar, setNavbar] = useState(true);
  useEffect(function onFirstMount() {
    window.addEventListener("scroll", changeBackground);
    // window.addEventListener("scroll", SetbackToTop);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(false);
      console.log("cuộn trang");
    } else {
      setNavbar(true);
      console.log("cuộn trangzzzz");
    }
  };

  return (
    <>
      <div className={navbar ? "navbar-pc" : "navbar-pc navbar-pc-scroll"}>
        <div className={navbar ? "navbar-pc__logo" : "navbar-pc__logo-scroll"}>
          <Image
            src={`/layout/footer/Asset8.png`}
            alt="description of image"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <div className="navbar-pc__menu">
          <Link href={"/games"}>
            <a className="navbar-pc__menu-text">Games</a>
          </Link>
          <Link href={"/films"}>
            <div className="navbar-pc__menu-text">Films</div>
          </Link>
          <Link href={"/ai"}>
            <div className="navbar-pc__menu-text">AI</div>
          </Link>
          <Link href={"/design"}>
            <div className="navbar-pc__menu-text">Thiết kế</div>
          </Link>
          <Link href={"/community"}>
            <div className="navbar-pc__menu-text">Cộng đồng</div>
          </Link>
          <Link href={"/contact"}>
            <div className="navbar-pc__menu-text">Liên hệ</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarPC;
