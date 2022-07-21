import type { NextPage } from "next";
import HomePage from "./home/index";
import Layout from "./components/layout";

const Home: NextPage = (props) => {
  return (
    <div className="my-wesite">
      <div>
        <Layout
          title="Criti Studio | Thiết Kế Game | Phim 3D | AI | Thiết Kế Website App Mobile |"
          description="Criti Studio là nhà thiết kế Games, Phim 3D, AI & Website hàng đầu. Với nền tảng chúng tôi cung cấp, người dùng có thể trải nghiệm và sử dụng những sản phẩm tốt nhất trên cả PC và Mobile"
          content_Google="Criti Studio là nhà thiết kế Games, Phim 3D, AI & Website hàng đầu. Với nền tảng chúng tôi cung cấp, người dùng có thể trải nghiệm và sử dụng những sản phẩm tốt nhất trên cả PC và Mobile"
          url_facebook="https://www.critistudio.com/"
          title_facebook="Criti Studio Thiết Kế Website App | Games | Films 3D | AI |"
          description_facebook="Criti Studio là nhà thiết kế Games, Phim 3D, AI & Website hàng đầu. Với nền tảng chúng tôi cung cấp, người dùng có thể trải nghiệm và sử dụng những sản phẩm tốt nhất trên cả PC và Mobile"
          image_facebook="/SEO/dich-vu-thiet-ke-website.jpg"
        >
          <HomePage />
        </Layout>
      </div>
    </div>
  );
};

export default Home;
