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
        <div className="navbar-pc__logo">
          <Image
            src={`/layout/footer/Asset8.png`}
            alt="description of image"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <div className="navbar-pc__menu">
          <div className="navbar-pc__menu-text">Games</div>
          <div className="navbar-pc__menu-text">Films</div>
          <div className="navbar-pc__menu-text">AI</div>
          <div className="navbar-pc__menu-text">Thiết kế</div>
          <div className="navbar-pc__menu-text">Cộng đồng</div>
          <div className="navbar-pc__menu-text">Liên hệ</div>
        </div>
      </div>
    </>
  );
};

export default NavbarPC;
