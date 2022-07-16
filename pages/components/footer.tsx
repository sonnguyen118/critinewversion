import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="footer-box-title">
            Cập nhật các dự án mới nhất của chúng tôi
          </div>
          <div className="footer-box-sub">
            Đăng kí để theo dõi các dự án và giảm giá ưu đãi cho các dịch vụ
            thiết kế của chúng tôi trong tương lai !
          </div>
          <div className="footer-box-input">
            <form className="footer-box-input-input">
              <input
                className="footer-box-input-input-box"
                type="text"
                placeholder="Nhập vào email của bạn"
              ></input>
            </form>
            <div className="footer-box-input-button">
              <i className="fab fa-telegram-plane footer-box-input-button-icon"></i>
            </div>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-main-top">
            <div className="footer-main-top-logo">
              <div className="footer-main-top-logo-img">
                <Image
                  src={`/layout/footer/Asset8.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="footer-main-top-logo-text">CRITI STUDIO</div>
            </div>
            <div className="footer-main-top-menu">
              <div className="footer-main-top-menu-text">Games</div>
              <div className="footer-main-top-menu-text">Films</div>
              <div className="footer-main-top-menu-text">AI</div>
              <div className="footer-main-top-menu-text">Thiết kế</div>
              <div className="footer-main-top-menu-text">Cộng đồng</div>
              <div className="footer-main-top-menu-text">Liên hệ</div>
            </div>
          </div>
          <div className="footer-main-wall"></div>
          <div className="footer-main-bottom">
            <div className="footer-main-bottom-social">
              <div className="footer-main-bottom-social-img">
                <Image
                  src={`/layout/footer/Asset4.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="footer-main-bottom-social-img">
                <Image
                  src={`/layout/footer/Asset5.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="footer-main-bottom-social-img">
                <Image
                  src={`/layout/footer/Asset6.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="footer-main-bottom-social-img">
                <Image
                  src={`/layout/footer/Asset7.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="footer-main-bottom-copyright">
              Copyright © 2022{" "}
              <a className="footer-main-bottom-copyright-link">CRITI STUDIO</a>.
              All rights reserved. Design by{" "}
              <a className="footer-main-bottom-copyright-link">Nguyễn Sơn</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
