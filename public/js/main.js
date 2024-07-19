// Glide Carousel Library JS
const config = {
    type: 'carousel',
    perView: 4
};

new Glide('.glide', config).mount()

// Split-type logo JS
const myText = new SplitType('#logo')

//GSAP library logo JS
gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})

// Animation on Scroll Library JS
AOS.init();