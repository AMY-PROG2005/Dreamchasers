const parallaxH1 = document.getElementById('parallaxH1');
const Asteroid1 = document.getElementById('Asteroid1');
const Asteroid2 = document.getElementById('Asteroid2');
const Asteroid3 = document.getElementById('Asteroid3');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let newLeft = 50 - scrollPosition / 10;
    let rotate = 50 - scrollPosition ;

    // Set the limit so that the left value doesn't go below 30%
    if (newLeft < 30) {
        newLeft = 30;
    }

    parallaxH1.style.left = newLeft + '%';
    Asteroid1.style.rotate = rotate + 'deg';
    Asteroid2.style.rotate = rotate + 'deg';
    Asteroid3.style.rotate = rotate + 'deg';
});
