
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Obrigado por entrar em contato! Em breve responderemos sua mensagem.');
        contactForm.reset();
    });
});

function redirectToMembership() {
    window.location.href = 'pagina_de_associacao.html'; 
}
function redirectToStore() {
            window.location.href = 'loja.html';
        }
