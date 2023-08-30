document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentIndex = 0;

    function showSlide(index) {
        slides[currentIndex].classList.remove("active");
        currentIndex = (index + slides.length) % slides.length;
        slides[currentIndex].classList.add("active");
    }

    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");

    prevButton.addEventListener("click", () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
        showSlide(currentIndex + 1);
    });
});
