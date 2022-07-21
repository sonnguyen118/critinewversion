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
          url_facebook="www.critistudio.com"
          title_facebook="Criti Studio Thiết Kế Website App | Games | Films 3D | AI |"
          description_facebook="Criti Studio là nhà thiết kế Games, Phim 3D, AI & Website hàng đầu. Với nền tảng chúng tôi cung cấp, người dùng có thể trải nghiệm và sử dụng những sản phẩm tốt nhất trên cả PC và Mobile"
          image_facebook="https://scontent.fhph1-2.fna.fbcdn.net/v/t39.30808-6/294689141_3085138121797424_8807982217397056752_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=BgQlJml6KAsAX_7kYby&_nc_ht=scontent.fhph1-2.fna&oh=00_AT-tB-HYB5c1NXuHyhjz4DYgV1-Ok1gkc9TudIBQhVU2zw&oe=62DE21E4"
        >
          <HomePage />
        </Layout>
      </div>
    </div>
  );
};

export default Home;
