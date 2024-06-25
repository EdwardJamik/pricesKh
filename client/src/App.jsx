import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./index.css";

const nextIcon = [
    <svg fill="#fff" height="20" width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.752 55.752" >
        <path d="M43.006,23.916c-0.28-0.282-0.59-0.52-0.912-0.727L20.485,1.581c-2.109-2.107-5.527-2.108-7.637,0.001 c-2.109,2.108-2.109,5.527,0,7.637l18.611,18.609L12.754,46.535c-2.11,2.107-2.11,5.527,0,7.637c1.055,1.053,2.436,1.58,3.817,1.58 s2.765-0.527,3.817-1.582l21.706-21.703c0.322-0.207,0.631-0.444,0.912-0.727c1.08-1.08,1.598-2.498,1.574-3.912 C44.605,26.413,44.086,24.993,43.006,23.916z"></path>
    </svg>
]

const backIcon = [
    <svg fill="#fff" height="20" width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.753 55.753">
        <path d="M12.745,23.915c0.283-0.282,0.59-0.52,0.913-0.727L35.266,1.581c2.108-2.107,5.528-2.108,7.637,0.001 c2.109,2.108,2.109,5.527,0,7.637L24.294,27.828l18.705,18.706c2.109,2.108,2.109,5.526,0,7.637 c-1.055,1.056-2.438,1.582-3.818,1.582s-2.764-0.526-3.818-1.582L13.658,32.464c-0.323-0.207-0.632-0.445-0.913-0.727 c-1.078-1.078-1.598-2.498-1.572-3.911C11.147,26.413,11.667,24.994,12.745,23.915z"></path>
    </svg>
]

const App = () => {
    const [slides, setSlides] = useState([]);
    const [flag, setFlag] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const container = document.querySelector(".container");
        const divs = container.querySelectorAll(".slide");
        setSlides(Array.from(divs));
    }, []);

    const nextSlide = () => {
        setFlag((prevFlag) => (prevFlag + 1) % slides.length);
        setActiveSlide((prevFlag) => (prevFlag + 1) % slides.length)
    };

    const prevSlide = () => {
        setFlag((prevFlag) => (prevFlag - 1 + slides.length) % slides.length);
        setActiveSlide((prevFlag) => (prevFlag - 1 + slides.length) % slides.length)
    };

    useEffect(() => {
        slides.forEach((slide, index) => {
            let position = (index - flag + slides.length) % slides.length;

            if (index === activeSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }

            if (position === 0) {
                slide.style.opacity = 1
                slide.style.transform = "translateX(0) scale(1)";
                // slide.style.boxShadow = "1em 0 1em -0.2em rgba(0, 0, 0, 0.2), -1em 0 1em -0.2em rgba(0, 0, 0, 0.2)"
                slide.style.zIndex = 99;
            } else if (position === 1) {
                slide.style.opacity = 1
                slide.style.transform = "translateX(32%) scale(0.69)";
                slide.style.boxShadow = "none";
                slide.style.zIndex = 9;
            } else if (position === slides.length - 1) {
                slide.style.opacity = 1
                slide.style.transform = "translateX(-32%) scale(0.69)";
                slide.style.boxShadow = "none";
                slide.style.zIndex = 9;
            } else {
                slide.style.opacity = 0
                slide.style.transform = "translateX(0) scale(0)";
                slide.style.boxShadow = "none";
                slide.style.zIndex = 1;
            }
        });
    }, [flag, slides]);

    const handlers = useSwipeable({
        onSwipedLeft: nextSlide,
        onSwipedRight: prevSlide
    });

    return (
        <>
            <div className="container" {...handlers}>
                <div className="slide s1">
                    <div className="content">
                        <div className='slide_emodji'>
                            <picture>
                                <img
                                    src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Fire.webp"
                                    alt="Fire" width="40" height="40"/>
                            </picture>
                        </div>
                        <h3>Basic</h3>
                        <span>200$</span>
                        <ul>
                            <li>налаштування акаунту</li>
                            <li>створення 1-го сценарію</li>
                            <li>консультація</li>
                        </ul>
                        <a href='https://t.me/chatbotique_bot?start=w26366518'>деталі</a>
                    </div>
                </div>
                <div className="slide s2">
                    <div className="content">
                    <div className='slide_emodji'>
                        <picture>
                            {/*<source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.webp"*/}
                            {/*        type="image/webp"/>*/}
                            {/*<img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f31f/512.gif" alt="🌟" width="40"*/}
                            {/*     height="40"/>*/}
                            <img
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Star.webp"
                                alt="Star" width="40" height="40"/>
                        </picture>
                    </div>
                    <h3>Pro</h3>
                    <span><small>від</small> 200$</span>
                    <ul>
                        <li>Basic</li>
                        <li>налаштування AI бота</li>
                    </ul>
                        <a href='https://t.me/chatbotique_bot?start=w26565312'>деталі</a>
                    </div>
                </div>
                <div className="slide s3">
                    <div className="content">
                    <div className='slide_emodji'>
                        <picture>
                            <img
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Smiling%20Face%20With%20Sunglasses.webp"
                                alt="Smiling Face With Sunglasses" width="40" height="40"/>
                        </picture>
                    </div>
                    <h3>Premium</h3>
                    <span><small>від</small> 1000$</span>
                    <ul>
                        <li>pro або кастомна розробка</li>
                        <li>інтеграції</li>
                    </ul>
                        <a href='https://t.me/chatbotique_bot?start=w26565311'>деталі</a>
                    </div>
                </div>
                <div className="slide s4">
                    <div className="content">
                    <div className='slide_emodji'>
                        <picture>
                            <img
                                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Symbols/Speech%20Balloon.webp"
                                alt="Speech Balloon" width="40" height="40"/>
                        </picture>
                    </div>
                    <h3>Консультація</h3>
                    <span>100$<small>/година</small></span>
                        <a href='https://t.me/chatbotique_bot?start=w26565337'>деталі</a>
                    </div>
                </div>
                <div className="slide s5">
                    <div className="content">
                    <div className='slide_emodji'>
                        <picture>
                            <img src="/brain.svg" alt="😎" width="40" height="40"/>
                        </picture>
                    </div>
                    <h3>AI assistant</h3>
                    <span><small>від</small> 200$</span>
                    <ul>
                        <li>бот на базі ChatGPT</li>
                    </ul>
                        <a href='https://t.me/chatbotique_bot?start=w26565323'>деталі</a>
                    </div>
                </div>
            </div>
            <div className="prev" onClick={prevSlide}>
                {backIcon}
            </div>
            <div className="next" onClick={nextSlide}>{nextIcon}</div>
        </>
    );
};

export default App;
