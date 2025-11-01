document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelector('.slides');
            const slideItems = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            const indicators = document.querySelectorAll('.indicator');
            
            let currentIndex = 0;
            const totalSlides = slideItems.length;
            
            // Update slide position
            function updateSlide() {
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update indicators
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlide();
            }
            
            // Previous slide
            function prevSlide() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlide();
            }
            
            // Button events
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Indicator click events
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlide();
                });
            });
            
            // Auto-rotate slides every 5 seconds
            let slideInterval = setInterval(nextSlide, 3000);
            
            // Pause on hover
            const slideshow = document.querySelector('.tech-slideshow');
            slideshow.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            slideshow.addEventListener('mouseleave', () => {
                slideInterval = setInterval(nextSlide, 5000);
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') nextSlide();
                if (e.key === 'ArrowLeft') prevSlide();
            });
        });
