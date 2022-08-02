import React, { createContext, useContext, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import AdsSection from "../../components/sections/ads section/adsSection";
import BestProducts from "../../components/sections/best products section/bestProducts";
import Certification from "../../components/sections/certification/certification";
import Footer from "../../components/sections/footer/footer";
import MainSection from "../../components/sections/main section/mainSection";
import NewsSection from "../../components/sections/news section/newsSection";
import OurRec from "../../components/sections/our rec section/ourRec";
import ScheduleSection from "../../components/sections/schedule section/scheduleSection";
import Services from "../../components/sections/services section/services";
import Testimonials from "../../components/sections/testimonials section/testimonials";
import UsersRec from "../../components/sections/users rec section/usersRec";
import ScrollToTop from "react-scroll-to-top";
import { RiArrowUpSLine } from "react-icons/ri";
import ModalContainer from "../../components/general/Modal/Location/ModalContainer";

export const ModalContext = createContext();

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context(
    "../../assets/images/ads section",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const Main = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div>
      <ScrollToTop component={<RiArrowUpSLine />} smooth top={100} />
      <ModalContext.Provider value={{ modalOpened, setModalOpened }}>
        <Navbar />
        <ModalContainer />
      </ModalContext.Provider>
      <MainSection />
      <ScheduleSection />
      <NewsSection />
      <UsersRec />
      <AdsSection
        image={images[0]}
        title="Суши-бар"
        subtitle="Сделайте сегодняшний день незабываемым для своей семьи!"
        gradient="linear-gradient(90deg, #dfe3ed 0%, #fafafa 100%)"
        textColor="#374151"
      />
      <OurRec />
      <AdsSection
        image={images[1]}
        title="Oshga marhamat!"
        subtitle="Цены на плов начинаются от 18 000 сумов. Ищите в категории «Национальная»."
        bgColor="#1F2937"
        textColor="#F3F4F6"
      />
      <BestProducts />
      <Testimonials />
      <Certification />
      <Services />
      <Footer />
    </div>
  );
};

export default Main;
