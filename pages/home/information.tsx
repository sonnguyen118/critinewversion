import React from "react";
import Image from "next/image";
import Link from "next/link";

const Information = () => {
  return (
    <>
      <div className="home-information">
        <div className="home-information-img">
          <Image
            src={`/homepage/imagemodel3D.png`}
            alt="description of image"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <div className="home-information-youtube">
          <iframe
            className="home-information-youtube-iframe"
            src="https://www.youtube.com/embed/utZQZsuX-_8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="home-information-bos">
          <div className="home-information-bos-title">
            Xây dựng nhân vật chân thực
          </div>
          <div className="home-information-bos-main">
            Criti Studio là nhà thiết kế game hàng đầu. Với nền tảng chúng tôi
            cung cấp, người dùng có thể trải nghiệm những tựa game online lôi
            cuốn, hấp dẫn nhất trên cả PC và mobile
          </div>
          <div className="home-information-bos-button">
            <div className="home-infor-letgo">
              <i className="fas fa-chevron-circle-right home-infor-letgo-btn"></i>
              <div className="home-infor-letgo-text">KHÁM PHÁ</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-webads">
        <div className="home-webads-bos">
          <div className="home-webads-bos-title">
            Xây Dựng Website App Mobile Cho Bạn
          </div>
          <div className="home-webads-bos-main">
            Criti Studio là nhà thiết kế game hàng đầu. Với nền tảng chúng tôi
            cung cấp, người dùng có thể trải nghiệm những tựa game online lôi
            cuốn, hấp dẫn nhất trên cả PC và mobile
          </div>
          <div className="home-webads-bos-button">
            <div className="home-infor-letgo">
              <i className="fas fa-chevron-circle-right home-infor-letgo-btn"></i>
              <div className="home-infor-letgo-text">KHÁM PHÁ</div>
            </div>
          </div>
        </div>
        <div className="home-webads-img">
          <Image
            src={`/homepage/websitedeigner.png`}
            alt="description of image"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
      </div>
    </>
  );
};

export default Information;
