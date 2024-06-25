import React, { useState, useEffect, useRef } from 'react';

function ImageSlider() {
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideCount, setSlideCount] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setSlideCount(containerRef.current.children.length);
        }
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slideCount - 1 : prevIndex - 1
        );
    };

    const slideStyles = (index) => {
        const offset = index - currentIndex;
        const scale = offset === 0 ? 1.5 : 1;
        const translateX = offset === 0 ? 0 : (offset > 0 ? 100 : -100) + 'px';
        const zIndex = offset === 0 ? 99 : 9;

        return {
            transform: `translateX(${translateX}) scale(${scale})`,
            zIndex: zIndex
        };
    };

    return (
        <div>
            <div className="container" ref={containerRef}>
                <div
                    className={`slide`}
                >
                    <div style={slideStyles()} className='slide_emodji'>
                        <picture>
                            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"
                                    type="image/webp"/>
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif" alt="🔥"
                                 width="40"
                                 height="40"/>
                        </picture>
                    </div>
                    <div className="slide-content">
                        {/* Вміст слайда може бути тут */}
                        <h3>Basic 1</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div
                    className={`slide`}
                    style={slideStyles()}
                >
                    <div className='slide_emodji'>
                        <picture>
                            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"
                                    type="image/webp"/>
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif" alt="🔥"
                                 width="40"
                                 height="40"/>
                        </picture>
                    </div>
                    <div className="slide-content">
                        {/* Вміст слайда може бути тут */}
                        <h3>Basic 1</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div
                    className={`slide`}
                    style={slideStyles()}
                >
                    <div className='slide_emodji'>
                        <picture>
                            <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"
                                    type="image/webp"/>
                            <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif" alt="🔥"
                                 width="40"
                                 height="40"/>
                        </picture>
                    </div>
                    <div className="slide-content">
                        {/* Вміст слайда може бути тут */}
                        <h3>Basic 1</h3>
                        <p>Description</p>
                    </div>
                </div>
            </div>
            <button onClick={prevSlide} className="prev">Previous</button>
            <button onClick={nextSlide} className="next">Next</button>
        </div>
    );
}

export default ImageSlider;
