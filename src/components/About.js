// Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('About Us')}</h1>
      <p>{t('We are cammarket')}</p>
     
    </div>
  );
}

export default About;
