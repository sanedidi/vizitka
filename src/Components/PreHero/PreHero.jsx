import React from 'react'
import './Prehero.scss'
import { useTranslation } from 'react-i18next';
const PreHero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="pulatov">
            <div className="pulatov__wrapper">
                <h2 className="pulatov__title">
                    {t("title")}
                </h2>
                <p className="pulatov__text">
                    {t("corp")}
                </p>
        </div>
    </section>
  )
}

export default PreHero