import { elements } from './elements';
import Slider from './slider';
import Preloader from "../preloader/preloader";

const sliderText = document.querySelector('#slider-text');
const sliderTitle = document.querySelector('#slider-title');
const sliderSubtitle = document.querySelector('#slider-subtitle');
const sliderImage = document.querySelector('#slider-image');
const textContent = document.getElementById('slider-text-content');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const slider = new Slider({
    elements,
    animationFunc: function(element){
        textContent.classList.add("hide");
        sliderImage.classList.add("hide");

        setTimeout(() => {
            sliderTitle.innerHTML = element.title;
            sliderSubtitle.innerHTML = element.subtitle;
            sliderText.innerHTML = element.text;
            sliderImage.src = element.image;

            textContent.classList.remove("hide");
            sliderImage.classList.remove("hide");
        }, 600);
    },
    speed: 5000,
});

slider.play();

leftArrow.addEventListener('click', () => slider.prev());
rightArrow.addEventListener('click', () => slider.next());


const imagePaths = elements.map(el => el.image);

Preloader.preloadImages({
    images: imagePaths,
    completed: function(){
        document.querySelector('.controls').style.display = 'block';
    },
})