document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".watch-image");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 3000); // Change toutes les 3 secondes
});


document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slide-image");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 3000); // Change toutes les 3 secondes
});




document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slide-image2");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 3000); // Change toutes les 3 secondes
});




//  super lumina
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".slide-image3");
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(changeImage, 3000); // Change toutes les 3 secondes
});





const flagImages = ['images/France.svg', 'images/Germany.svg', 'images/United-kingdom.svg'];
let currentIndex = 0;

document.getElementById('flag').addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % flagImages.length;
    this.src = flagImages[currentIndex];
});


// js swiper

const swiper = new Swiper('.swiper', {
    autoplay: { delay: 2000 },
    navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 80,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// pour la vidéo d'intro
const videoIntro = document.getElementById('videoIntro');

// Après 3 secondes, on active le son
setTimeout(() => {
    video.muted = false;  // Désactive le mode muet
}, 3000);  // 3000 millisecondes = 3 secondes