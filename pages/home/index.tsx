import React from "react";
import AboutUs from "./aboutus";
import MyClient from "./myclient";
import Information from "./information";
import Orders from "./orders";
import Contact from "./contact";

const HomePage = () => {
  return (
    <>
      <div className="home">
        <video autoPlay loop muted className="home-background">
          <source type="video/mp4" src="/layout/navbarpc/Fantasy.mp4" />
        </video>
        <div>
          <div className="CSSgal">
            {/* Don't wrap targets in parent */}
            <s id="s1" />
            <s id="s2" />
            <s id="s3" />
            <s id="s4" />
            <div className="home-block1mobile-slider slider">
              <div className="home-block1mobile-infor">
                <div className="home-infor-slide">
                  <div className="home-infor-title">
                    Chào mừng đến với Criti Studio
                  </div>
                  <div className="home-infor-header">Cấp Độ Mới Của</div>
                  <div className="home-infor-header">
                    Khả Năng Không Giới Hạn
                  </div>
                  <div className="home-infor-sub">
                    Chúng tôi giải trí cho hàng tỷ người dùng bằng chò trơi của
                    mình. Sứ mệnh của chúng tôi là giải trí thế giới không chỉ
                    là chơi game.
                  </div>
                  <div className="home-infor-letgo">
                    <i className="fas fa-chevron-circle-right home-infor-letgo-btn"></i>
                    <div className="home-infor-letgo-text">KHÁM PHÁ</div>
                  </div>
                </div>
              </div>
              <div className="home-block1mobile-infor">
                <div className="home-infor-slide">
                  <div className="home-infor-title">
                    Chào mừng đến với Criti Studio
                  </div>
                  <div className="home-infor-header">Cấp Độ Mới Của</div>
                  <div className="home-infor-header">
                    Khả Năng Không Giới Hạn
                  </div>
                  <div className="home-infor-sub">
                    Chúng tôi giải trí cho hàng tỷ người dùng bằng chò trơi của
                    mình. Sứ mệnh của chúng tôi là giải trí thế giới không chỉ
                    là chơi game.
                  </div>
                  <div className="home-infor-letgo">
                    <i className="fas fa-chevron-circle-right home-infor-letgo-btn"></i>
                    <div className="home-infor-letgo-text">KHÁM PHÁ</div>
                  </div>
                </div>
              </div>
              <div className="home-block1mobile-infor">
                <div className="home-infor-slide">
                  <div className="home-infor-title">
                    Chào mừng đến với Criti Studio
                  </div>
                  <div className="home-infor-header">Cấp Độ Mới Của</div>
                  <div className="home-infor-header">
                    Khả Năng Không Giới Hạn
                  </div>
                  <div className="home-infor-sub">
                    Chúng tôi giải trí cho hàng tỷ người dùng bằng chò trơi của
                    mình. Sứ mệnh của chúng tôi là giải trí thế giới không chỉ
                    là chơi game.
                  </div>
                  <div className="home-infor-letgo">
                    <i className="fas fa-chevron-circle-right home-infor-letgo-btn"></i>
                    <div className="home-infor-letgo-text">KHÁM PHÁ</div>
                  </div>
                </div>
              </div>
              <div className="home-block1mobile-infor">
                <div className="home-infor-slide">
                  <div className="home-infor-title">
                    Chào mừng đến với Criti Studio
                  </div>
                  <div className="home-infor-header">Cấp Độ Mới Của</div>
                  <div className="home-infor-header">
                    Khả Năng Không Giới Hạn
                  </div>
                  <div className="home-infor-sub">
                    Chúng tôi giải trí cho hàng tỷ người dùng bằng chò trơi của
                    mình. Sứ mệnh của chúng tôi là giải trí thế giới không chỉ
                    là chơi game.
                  </div>
                  <div className="home-infor-letgo">
                    <i className="fas fa-chevron-circle-right home-infor-letgo-btn"></i>
                    <div className="home-infor-letgo-text">KHÁM PHÁ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prevNext">
              <div>
                <a href="#s4" />
                <a href="#s2" />
              </div>
              <div>
                <a href="#s1" />
                <a href="#s3" />
              </div>
              <div>
                <a href="#s2" />
                <a href="#s4" />
              </div>
              <div>
                <a href="#s3" />
                <a href="#s1" />
              </div>
            </div>
            <div className="bullets">
              <a href="#s1"></a>
              <a href="#s2"></a>
              <a href="#s3"></a>
              <a href="#s4"></a>
            </div>
          </div>
        </div>
        <div className="home-infor">
          <div className="home-infor-title">Chào mừng đến với Criti Studio</div>
          <div className="home-infor-header">Cấp Độ Mới Của</div>
          <div className="home-infor-header">Khả Năng Không Giới Hạn</div>
          <div className="home-infor-sub">
            Chúng tôi giải trí cho hàng tỷ người dùng bằng chò trơi của mình. Sứ
            mệnh của chúng tôi là giải trí thế giới không chỉ là chơi game.
          </div>
          <div className="home-infor-letgo">
            <i className="fas fa-chevron-circle-right home-infor-letgo-btn"></i>
            <div className="home-infor-letgo-text">KHÁM PHÁ</div>
          </div>
        </div>
        <AboutUs />
        <MyClient />
        <Information />
        <Orders />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
