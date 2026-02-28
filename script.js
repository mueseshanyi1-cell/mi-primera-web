document.addEventListener('DOMContentLoaded', () => {
    // 1. Resaltar página activa en el menú
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (currentPath === href || (currentPath === "" && href === "index.html")) {
            link.classList.add('active');
        }
    });

    // 2. Lógica del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            
            alert(`¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.`);
            
            contactForm.reset(); // Limpia el formulario
        });
    }
});