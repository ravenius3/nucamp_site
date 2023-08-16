console.log('JS connected')

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
})

const carouselPause = document.querySelector('#carouselPause');
carouselPause.addEventListener('click', function() {
    console.log('Pausing the carousel.');
    carousel.pause();
})

const carouselPlay = document.querySelector('#carouselPlay');
carouselPlay.addEventListener('click', function() {
    console.log('Play the carousel');
    carousel.cycle();
})