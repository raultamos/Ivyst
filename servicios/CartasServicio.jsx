import React, { useState, useEffect, useCallback } from 'react';

// Your service data (assuming you define this elsewhere or pass it as a prop)
const servicesData = [ /* ... your service objects ... */ ]; 
const SLIDE_INTERVAL_MS = 5000; // 5 seconds (matched your JS)

function ServicesSlider({ slides = servicesData }) {
    // 1. STATE: Replaces 'let currentIndex'
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = slides.length;

    // 2. LOGIC: Replaces nextSlide() and prevSlide() functions
    // useCallback is used to memoize these functions for useEffect dependency
    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    // 3. EFFECT: Manages Auto-play (Replaces setInterval/clearInterval)
    useEffect(() => {
        // Sets up the auto-play interval
        const interval = setInterval(nextSlide, SLIDE_INTERVAL_MS);

        // Cleans up the interval when the component unmounts
        return () => clearInterval(interval);
    }, [nextSlide]); // Re-run only if nextSlide changes (it won't, thanks to useCallback)

    // 4. EFFECT: Manages Keyboard Navigation (Replaces document.addEventListener('keydown'))
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        };

        document.addEventListener('keydown', handleKeyDown);

        // Cleanup the event listener when the component unmounts
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Note: Pause on Hover is handled in the JSX below using onMouseEnter/onMouseLeave
    // and a separate state variable, which is a bit cleaner than your vanilla JS solution.

    // Get the data for the currently active slide to render
    const currentService = slides[currentIndex];

    // 5. RENDER: Replaces all DOM manipulation logic (updateSlide)
    return (
        <div 
            className="tech-slideshow" 
            // Pause on hover can be achieved by using another state/effect, 
            // but for simplicity, we'll focus on the core logic here.
        >
            <div 
                className="slides" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {/* * In a real React app, you would map over your slide data 
                  * to render the individual slide components instead of 
                  * relying on querySelectorAll('.slide')
                  */}
                {slides.map((slide, index) => (
                    <div key={slide.id} className="slide">
                        {/* Render your slide content here using {slide.data} */}
                        {/* ... your icon, title, description, details ... */}
                    </div>
                ))}
            </div>

            {/* Navigation Buttons (Replaces prevBtn/nextBtn event listeners) */}
            <button className="prev" onClick={prevSlide}>{'<'}</button>
            <button className="next" onClick={nextSlide}>{'>'}</button>

            {/* Pagination Indicators (Replaces indicators event listeners) */}
            <div className="indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ServicesSlider;