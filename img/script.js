const backgroundPhotos = document.querySelectorAll('.background-photo');
let currentPhotoIndex = 0;

function changeBackgroundPhoto() {
    backgroundPhotos[currentPhotoIndex].classList.remove('active');
    
    currentPhotoIndex = (currentPhotoIndex + 1) % backgroundPhotos.length;
    
    backgroundPhotos[currentPhotoIndex].classList.add('active');
}

setInterval(changeBackgroundPhoto, 8000);

const phrases = [
    "Creating the future today",
    "Innovation in every detail", 
    "Quality comes first",
    "Passion for excellence",
    "Turning ideas into reality"
];

let currentPhraseIndex = 0;
const phraseElement = document.querySelector('.phrase');

function changePhrase() {
    const activePhrase = document.querySelector('.phrase.active');
    if (activePhrase) {
        activePhrase.classList.remove('active');
        activePhrase.classList.add('fading-out');
        
        setTimeout(() => {
            activePhrase.remove();
            
            const newPhrase = document.createElement('span');
            newPhrase.className = 'phrase';
            newPhrase.textContent = phrases[currentPhraseIndex];
            document.querySelector('.motivational-phrases').appendChild(newPhrase);
            
            setTimeout(() => {
                newPhrase.classList.add('active');
            }, 50);
            
        }, 800);
    }
    
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

setInterval(changePhrase, 3000);

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
}

function handleScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(handleScrollAnimations, 100);
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('resize', handleScrollAnimations);
});
