import React, { useEffect, useState } from "react";
import "swiper/css";
import "./Hero.scss";

const Hero = () => {
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // Получаем значение прокрутки страницы
      const currentScrollValue = window.scrollY;
      setScrollValue(currentScrollValue);
    };

    // Добавляем слушателя события скролла при монтировании компонента
    window.addEventListener("scroll", handleScroll);

    // Убираем слушателя при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Пустой массив зависимостей гарантирует, что эффект будет вызван только при монтировании и размонтировании компонента

  // Вычисляем прозрачность фона в зависимости от значения прокрутки
  const backgroundOpacity = Math.min(scrollValue / 300, 1);

  // Применяем стили к body
  useEffect(() => {
    document.body.style.backgroundColor = `rgba(0, 0, 0, ${backgroundOpacity})`;

    // Убираем стили при размонтировании компонента
    return () => {
      document.body.style.backgroundColor = "initial";

    };
  }, [backgroundOpacity]);

  const handleSectionEnd = () => {
    // При окончании секции возвращаем экран плавно в белый цвет
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = "white";
    // Убираем анимацию после завершения перехода
    setTimeout(() => {
      document.body.style.transition = "initial";
      document.body.style.color = "white"
    }, 500);
  };

  return (
    <div className="hero" onScroll={handleSectionEnd}>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__top">
            <p className={ !scrollValue ? "hero__text" : 'hero__text white'}>Co-owner of companies </p>
            <h2 className={!scrollValue ? "hero__title" : "hero__title white"}>Nodir Pulatov</h2>
          </div>
          <div className="hero__content">
            <p className={!scrollValue ? "hero__text-btm" : "hero__text-btm white"}>
              Branding, websites and digital experiences, crafted with love,
              intelligence, precision and emotion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
