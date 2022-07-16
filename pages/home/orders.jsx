import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const Orders = () => {
  const settings = {
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="home-orders">
        <div className="home-orders-text">
          <div className="home-orders-text-header">
            Trí Tưởng Tượng, Đổi Mới, Hóa Thân
          </div>
          <div className="home-orders-text-title">
            Sứ mệnh của chúng tôi là tạo ra thế giới ảo nơi có ý nghĩa hơn cả
            cuộc sống thực
          </div>
          <div className="home-orders-text-sub">
            Criti Studio hiện thực hóa các ý tưởng của bạn thành hiện thực, từ
            thiết kế game, Films, hệ thống Ai đến trang website App phục vụ kinh
            doanh của bạn
          </div>
        </div>
        <div className="home-orders-slide">
          <Slider {...settings} className="home-orders-slide-group">
            <div className="home-orders-slide-group-wrapitem">
              <div className="home-orders-slide-group-item">
                <div className="home-orders-slide-group-item-title">
                  Thiết kế Website chuẩn SEO
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/timeicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Thời gian thiết kế: 7 -14 Ngày
                  </div>
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/priceicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Giá thiết kế: 500.000 - 3.000.000 VNĐ
                  </div>
                </div>
                <div className="home-orders-slide-group-item-main">
                  Criti Studio là nhà thiết kế game hàng đầu. Với nền tảng chúng
                  tôi cung cấp, người dùng có thể trải nghiệm những tựa game
                  online lôi cuốn, hấp dẫn nhất trên cả PC và mobile
                </div>
                <div className="home-orders-slide-group-item-order">
                  <div className="home-orders-slide-group-item-order-text">
                    Xem báo giá chi tiết
                  </div>
                  <div className="home-orders-slide-group-item-order-icon">
                    <Image
                      src={`/homepage/buttonicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-orders-slide-group-wrapitem">
              <div className="home-orders-slide-group-item">
                <div className="home-orders-slide-group-item-title">
                  Thiết kế Website chuẩn SEO
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/timeicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Thời gian thiết kế: 7 -14 Ngày
                  </div>
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/priceicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Giá thiết kế: 500.000 - 3.000.000 VNĐ
                  </div>
                </div>
                <div className="home-orders-slide-group-item-main">
                  Criti Studio là nhà thiết kế game hàng đầu. Với nền tảng chúng
                  tôi cung cấp, người dùng có thể trải nghiệm những tựa game
                  online lôi cuốn, hấp dẫn nhất trên cả PC và mobile
                </div>
                <div className="home-orders-slide-group-item-order">
                  <div className="home-orders-slide-group-item-order-text">
                    Xem báo giá chi tiết
                  </div>
                  <div className="home-orders-slide-group-item-order-icon">
                    <Image
                      src={`/homepage/buttonicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-orders-slide-group-wrapitem">
              <div className="home-orders-slide-group-item">
                <div className="home-orders-slide-group-item-title">
                  Thiết kế Website chuẩn SEO
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/timeicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Thời gian thiết kế: 7 -14 Ngày
                  </div>
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/priceicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Giá thiết kế: 500.000 - 3.000.000 VNĐ
                  </div>
                </div>
                <div className="home-orders-slide-group-item-main">
                  Criti Studio là nhà thiết kế game hàng đầu. Với nền tảng chúng
                  tôi cung cấp, người dùng có thể trải nghiệm những tựa game
                  online lôi cuốn, hấp dẫn nhất trên cả PC và mobile
                </div>
                <div className="home-orders-slide-group-item-order">
                  <div className="home-orders-slide-group-item-order-text">
                    Xem báo giá chi tiết
                  </div>
                  <div className="home-orders-slide-group-item-order-icon">
                    <Image
                      src={`/homepage/buttonicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-orders-slide-group-wrapitem">
              <div className="home-orders-slide-group-item">
                <div className="home-orders-slide-group-item-title">
                  Thiết kế Website chuẩn SEO
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/timeicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Thời gian thiết kế: 7 -14 Ngày
                  </div>
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/priceicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Giá thiết kế: 500.000 - 3.000.000 VNĐ
                  </div>
                </div>
                <div className="home-orders-slide-group-item-main">
                  Criti Studio là nhà thiết kế game hàng đầu. Với nền tảng chúng
                  tôi cung cấp, người dùng có thể trải nghiệm những tựa game
                  online lôi cuốn, hấp dẫn nhất trên cả PC và mobile
                </div>
                <div className="home-orders-slide-group-item-order">
                  <div className="home-orders-slide-group-item-order-text">
                    Xem báo giá chi tiết
                  </div>
                  <div className="home-orders-slide-group-item-order-icon">
                    <Image
                      src={`/homepage/buttonicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-orders-slide-group-wrapitem">
              <div className="home-orders-slide-group-item">
                <div className="home-orders-slide-group-item-title">
                  Thiết kế Website chuẩn SEO
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/timeicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Thời gian thiết kế: 7 -14 Ngày
                  </div>
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/priceicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Giá thiết kế: 500.000 - 3.000.000 VNĐ
                  </div>
                </div>
                <div className="home-orders-slide-group-item-main">
                  Criti Studio là nhà thiết kế game hàng đầu. Với nền tảng chúng
                  tôi cung cấp, người dùng có thể trải nghiệm những tựa game
                  online lôi cuốn, hấp dẫn nhất trên cả PC và mobile
                </div>
                <div className="home-orders-slide-group-item-order">
                  <div className="home-orders-slide-group-item-order-text">
                    Xem báo giá chi tiết
                  </div>
                  <div className="home-orders-slide-group-item-order-icon">
                    <Image
                      src={`/homepage/buttonicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-orders-slide-group-wrapitem">
              <div className="home-orders-slide-group-item">
                <div className="home-orders-slide-group-item-title">
                  Thiết kế Website chuẩn SEO
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/timeicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Thời gian thiết kế: 7 -14 Ngày
                  </div>
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/priceicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Giá thiết kế: 500.000 - 3.000.000 VNĐ
                  </div>
                </div>
                <div className="home-orders-slide-group-item-main">
                  Criti Studio là nhà thiết kế game hàng đầu. Với nền tảng chúng
                  tôi cung cấp, người dùng có thể trải nghiệm những tựa game
                  online lôi cuốn, hấp dẫn nhất trên cả PC và mobile
                </div>
                <div className="home-orders-slide-group-item-order">
                  <div className="home-orders-slide-group-item-order-text">
                    Xem báo giá chi tiết
                  </div>
                  <div className="home-orders-slide-group-item-order-icon">
                    <Image
                      src={`/homepage/buttonicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-orders-slide-group-wrapitem">
              <div className="home-orders-slide-group-item">
                <div className="home-orders-slide-group-item-title">
                  Thiết kế Website chuẩn SEO
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/timeicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Thời gian thiết kế: 7 -14 Ngày
                  </div>
                </div>
                <div className="home-orders-slide-group-item-time">
                  <div className="home-orders-slide-group-item-time-icon">
                    <Image
                      src={`/homepage/priceicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <div className="home-orders-slide-group-item-time-text">
                    Giá thiết kế: 500.000 - 3.000.000 VNĐ
                  </div>
                </div>
                <div className="home-orders-slide-group-item-main">
                  Criti Studio là nhà thiết kế game hàng đầu. Với nền tảng chúng
                  tôi cung cấp, người dùng có thể trải nghiệm những tựa game
                  online lôi cuốn, hấp dẫn nhất trên cả PC và mobile
                </div>
                <div className="home-orders-slide-group-item-order">
                  <div className="home-orders-slide-group-item-order-text">
                    Xem báo giá chi tiết
                  </div>
                  <div className="home-orders-slide-group-item-order-icon">
                    <Image
                      src={`/homepage/buttonicon.png`}
                      alt="description of image"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Orders;
