import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <div className="home-contact">
        <div className="home-orders-text">
          <div className="home-orders-text-header">Liên hệ chúng tôi</div>
          <div className="home-orders-text-title">
            CHÚNG TÔI LUÔN LẮNG NGHE BẠN
          </div>
          <div className="home-orders-text-sub">
            Giữ liên lạc với chúng tôi, gửi Email hoặc bắt đầu một cuộc trò
            chuyện bằng cách điền vào và gửi biểu mẫu bên dưới.
          </div>
        </div>
        <div className="home-contact-group">
          <div className="home-contact-group-bos1">
            <div className="home-contact-group-bos1-title">
              Liên hệ với chúng tôi !
            </div>
            <div className="home-contact-group-bos1-item">
              <div className="home-contact-group-bos1-item-icon">
                <i className="fas fa-envelope home-contact-group-bos1-item-icon-icon"></i>
              </div>
              <div className="home-contact-group-bos1-item-infor">
                <div className="home-contact-group-bos1-item-infor-title">
                  Email
                </div>
                <div className="home-contact-group-bos1-item-infor-main">
                  infor@critistudio.com
                </div>
              </div>
            </div>
            <div className="home-contact-group-bos1-item">
              <div className="home-contact-group-bos1-item-icon">
                <i className="fas fa-phone home-contact-group-bos1-item-icon-icon"></i>
              </div>
              <div className="home-contact-group-bos1-item-infor">
                <div className="home-contact-group-bos1-item-infor-title">
                  Phone
                </div>
                <div className="home-contact-group-bos1-item-infor-main">
                  0981.83.9980
                </div>
              </div>
            </div>
            <div className="home-contact-group-bos1-tile2">
              Theo dõi chúng tôi tại
            </div>
            <div className="home-contact-group-bos1-social">
              <div className="home-contact-group-bos1-social-item">
                <Image
                  src={`/homepage/facebook.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="home-contact-group-bos1-social-item">
                <Image
                  src={`/homepage/linkid.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="home-contact-group-bos1-social-item">
                <Image
                  src={`/homepage/twiter.png`}
                  alt="description of image"
                  layout="fill"
                  data-testid="close-icon"
                  objectFit="contain"
                />
              </div>
              <div className="home-contact-group-bos1-social-item">
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
          <form className="home-contact-group-bos2">
            <p className="home-contact-group-bos2-label">Họ và Tên</p>
            <input
              className="home-contact-group-bos2-input"
              placeholder="Nhập vào họ tên của bạn"
            />
            <p className="home-contact-group-bos2-label">Địa chỉ Email</p>
            <input
              className="home-contact-group-bos2-input"
              placeholder="Nhập vào Email của bạn"
            />
            <p className="home-contact-group-bos2-label">Tiêu Đề</p>
            <input
              className="home-contact-group-bos2-input"
              placeholder="Nhập vào tiêu đề"
            />
            <p className="home-contact-group-bos2-label">Nội Dung</p>
            <textarea
              className="home-contact-group-bos2-textarea"
              placeholder="Nhập nội dung bạn muốn gửi tới chúng tôi"
            />
            <button className="home-contact-group-bos2-button">
              Gửi Liên Hệ
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
