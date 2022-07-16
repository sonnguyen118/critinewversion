import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const MyClient = () => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const data_company = [
    "/homepage/company/logo1.png",
    "/homepage/company/logo2.png",
    "/homepage/company/logo3.png",
    "/homepage/company/logo4.png",
    "/homepage/company/logo5.png",
    "/homepage/company/logo6.png",
    "/homepage/company/logo7.png",
    "/homepage/company/logo8.png",
    "/homepage/company/logo9.png",
    "/homepage/company/logo10.png",
  ];
  return (
    <>
      <div className="home-myclient">
        <div className="home-myclient-infor">
          <div className="home-myclient-infor-header">
            Trí tưởng tượng, Đổi mới, Hóa thân
          </div>
          <div className="home-myclient-infor-title">
            Sứ mệnh của chúng tôi là tạo ra thế giới ảo nơi có ý nghĩa hơn cả
            cuộc sống thực
          </div>
          <div className="home-myclient-infor-sub">
            Criti Studio hiện thực hóa các ý tưởng của bạn thành hiện thực, từ
            thiết kế game, Films, hệ thống Ai đến trang website App phục vụ kinh
            doanh của bạn
          </div>
        </div>
        <div className="home-myclient-video">
          <iframe
            className="home-myclient-video-iframe"
            src="https://www.youtube.com/embed/tcCePLlZ01I"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="home-myclient-clients">
          <div className="home-myclient-clients-title">
            KHÁCH HÀNG CỦA CHÚNG TÔI
          </div>
          <Slider {...settings} className="home-myclient-clients-group">
            {data_company.map((img, i) => (
              <div className="home-myclient-clients-group-item" key={i}>
                <Image src={img} alt="" layout="fill" objectFit="contain" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MyClient;
