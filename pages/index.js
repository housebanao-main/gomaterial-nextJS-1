import { useCallback } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Switch from "../components/Switch/Switch";
import CategoryCollage from "../components/Category/CategoryCollage";
import Deals from "../components/Deals/Deals";
import ShopWithUs from "../components/Shop/ShopWithUs";
import Highlight from "../components/Trending/highlight";
import ServiceBox from "../components/Services/Servicebox";
import RequirmentForm from "../components/Form/RequirmentForm";
import AboutContainer from "../components/About/AboutContainer";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Footer/Copyright";
import Modal from "../components/Modal/Modal";


import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/view");
  }, [router]);

  return (
    <div className="w-full absolute">
      <Modal />
      <Header />
      <Main />
      <Switch />
      <CategoryCollage />
      <Deals />
      <ShopWithUs />
      <Highlight />
      <ServiceBox />
      <RequirmentForm />
      <AboutContainer />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Home;
