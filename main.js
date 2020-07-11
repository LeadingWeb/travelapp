const $ham = document.getElementById('hamburger');
const $hamMenu = document.querySelector('.hamburger_menu');
const $x = document.getElementById('x');

$ham.addEventListener('click', () => {
    hamburgerMenuIn();
});
$x.addEventListener('click', () => {
    hamburgerMenuOut();
})

function hamburgerMenuIn() {
    let animationCounter = 0;
    $hamMenu.style.opacity = animationCounter;
    $hamMenu.style.display = 'flex';
    let opacSpeed = 0.05;
    const loop = setInterval( () => {
        if (animationCounter < 0.94) {
            animationCounter += opacSpeed;
            $hamMenu.style.opacity = animationCounter;
        }else {
            clearInterval(loop);
            $hamMenu.style.opacity = 1;
            
        }
    }, 1000/50);
    
}
function hamburgerMenuOut() {
    let animationCounter = 1;
    
    let opacSpeed = 0.05;
    const loop = setInterval( () => {
        if (animationCounter > 0.06) {
            animationCounter -= opacSpeed;
            $hamMenu.style.opacity = animationCounter;
        }else {
            clearInterval(loop)
            $hamMenu.style.opacity = 0;
            $hamMenu.style.display = 'none';
            
        }
    }, 1000/50);
    
}
