import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './index.css';

import { EffectCards } from 'swiper/modules';
import Slider from "./component/Slider.jsx";
function App() {

  return (
      <>
          {/*<Swiper*/}
          {/*    effect={"cards"}*/}
          {/*    grabCursor={true}*/}
          {/*    loop={true}*/}
          {/*    modules={[EffectCards]}*/}
          {/*    centeredSlides={true}*/}
          {/*    // slidesPerView={1}*/}
          {/*    // spaceBetween={50}// кількість слайдів до та після поточного*/}
          {/*    className="mySwiper"*/}

          {/*>*/}
          {/*    <SwiperSlide>*/}
          {/*        <div className='slide_emodji'>*/}
          {/*            <picture>*/}
          {/*                <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"*/}
          {/*                        type="image/webp"/>*/}
          {/*                <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif" alt="🔥" width="40"*/}
          {/*                     height="40"/>*/}
          {/*            </picture>*/}
          {/*        </div>*/}
          {/*        <div>*/}


          {/*            <h2>Basic</h2>*/}
          {/*            200$*/}
          {/*            - налаштування акаунту*/}
          {/*            - створення 1-го сценарію*/}
          {/*            - консультація*/}

          {/*            КНОПКА: ДЕТАЛІ*/}
          {/*        </div>*/}
          {/*    </SwiperSlide>*/}
          {/*    <SwiperSlide>Slide 2</SwiperSlide>*/}
          {/*    <SwiperSlide>Slide 3</SwiperSlide>*/}
          {/*    <SwiperSlide>Slide 4</SwiperSlide>*/}
          {/*    <SwiperSlide>Slide 5</SwiperSlide>*/}
          {/*    <SwiperSlide>Slide 6</SwiperSlide>*/}
          {/*    <SwiperSlide>Slide 7</SwiperSlide>*/}
          {/*    <SwiperSlide>Slide 8</SwiperSlide>*/}
          {/*    <SwiperSlide>Slide 9</SwiperSlide>*/}
          {/*</Swiper>*/}
          <Slider slides={[{title:'Basic 1',description:'description'},{title:'Basic 2',description:'description'},{title:'Basic 3',description:'description'}]}/>
      </>
  )
}

export default App
