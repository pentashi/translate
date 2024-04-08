import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider';
import HomeCategories from '../../COMPONENTS/Category/HomeCategories';
import Footer1 from '../../COMPONENTS/Footer/Footer1';
import Footer2 from '../../COMPONENTS/Footer/Footer2';
import Navbar from '../../COMPONENTS/Navbar/Navbar';

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('Welcome')}</h1>
      <p>{t('This is a sample translation')}</p>
      <div>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fr')}>French</button>
      </div>

      <Navbar reloadnavbar={false} />
      <BannerSlider />
      <HomeCategories />
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Home;
