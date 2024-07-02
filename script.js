document.addEventListener('DOMContentLoaded', () => {
    const slidingPages = document.querySelector('.sliding-pages');
    let currentSlide = 0;

    // Function to slide to the next image
    const slideNext = () => {
        currentSlide = (currentSlide + 1) % 2; // Change 2 to number of slides if more than 2
        slidingPages.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    // Automatically slide every 5 seconds
    setInterval(slideNext, 1500);
});
