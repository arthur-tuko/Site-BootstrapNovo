/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // --- LÓGICA DA TROCA DE LOGO (Definições) ---
    const logoImg = document.getElementById('logo-img');
    const logoInicial = 'assets/img/alma - Editado.png';     // Caminho da 'alminha'
    const logoRolada = 'assets/img/coraçãonegro.webp';       // Caminho da 'coraçãonegro'
    // ----------------------------------------------

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        
        // Verifica se está no topo
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
            
            // --- LÓGICA DA LOGO: NO TOPO ---
            if (logoImg) {
                logoImg.src = logoInicial;
            }
            // --------------------------------
            
        } else {
            navbarCollapsible.classList.add('navbar-shrink')

            // --- LÓGICA DA LOGO: ROLOU ---
            if (logoImg) {
                logoImg.src = logoRolada;
            }
            // -----------------------------
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
