import React, { useState } from 'react';
import './carrusel.css';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        'src/assets/Amsterdam.jpg',
        'src/assets/bali.jpeg',
        'src/assets/Bangkok.jpg',
        'src/assets/NY.jpg',
        'src/assets/Miami.jpg',
        'src/assets/paris2.jpg',
        'src/assets/Rio de Janeiro2.jpg',
        'src/assets/roma1.jpg',
        'src/assets/Las vegas.jpg',
        'src/assets/barcelona2.jpg',
    ];

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="carousel">
            <img className="carousel-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
            <div className="carousel-buttons">
                <button className="carousel-button prev" onClick={handlePrev}>
                    &lt;
                </button>
                <button className="carousel-button next" onClick={handleNext}>
                    &gt;
                </button>
            </div>
        </div>
    );
}


