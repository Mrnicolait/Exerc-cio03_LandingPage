$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"]
    });
});

// Galeria de Fotos com Modal
const galeriaImgs = document.querySelectorAll('#galeria img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('img-modal');
const span = document.getElementsByClassName('close')[0];

galeriaImgs.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

span.onclick = function() { 
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


