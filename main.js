var typed = new Typed('.element', {
    strings: ['Web 3 solutions...', 'Inspiring X...'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

var down = document.getElementById('#down');
down.onclick = function myFunction(){
    window.scrollBy(0, -739);
}