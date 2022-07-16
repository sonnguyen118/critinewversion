import React, { useState, useEffect } from "react";
import Image from "next/image";

const NavbarMB = () => {
  const [clickButton, setclickButton] = useState(true);
  const handleClickButton = () => {
    if (clickButton) {
      setclickButton(false);
    } else {
      setclickButton(true);
    }
  };
  return (
    <>
      <div className={clickButton ? "wrapper" : "wrapper open"}>
        <header id="header" className="header">
          <nav className="menu-navigation">
            <i className="menu-icon-toggle" onClick={handleClickButton}>
              <span />
            </i>
            <i className="menu-background top" />
            <i className="menu-background middle" />
            <i className="menu-background bottom" />
            <div className="navbarpc-box">
              <div>
                <ul className="menu">
                  <li>
                    <a href="#">Trang Chủ</a>
                  </li>
                  <li>
                    <a href="#">Games</a>
                  </li>
                  <li>
                    <a href="#">Films</a>
                  </li>
                  <li>
                    <a href="#">AI</a>
                  </li>
                  <li>
                    <a href="#">Thiết Kế</a>
                  </li>
                  <li>
                    <a href="#">Cộng Đồng</a>
                  </li>
                  <li>
                    <a href="#">Liên Hệ</a>
                  </li>
                </ul>
                <div className="navbarpc-box-social">
                  <div className="navbarpc-box-social-icon">
                    <Image
                      src={`/homepage/facebook.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="navbarpc-box-social-icon">
                    <Image
                      src={`/homepage/linkid.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="navbarpc-box-social-icon">
                    <Image
                      src={`/homepage/twiter.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="navbarpc-box-social-icon">
                    <Image
                      src={`/homepage/instargram.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
              <div className="navbarpc-box-logo">
                <Image
                  src={`/logocriti.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default NavbarMB;
