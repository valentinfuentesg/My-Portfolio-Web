$(function() {
    var topoffset = 70;
    
    $('.navbar-nav a').click(function () {
        $('.navbar-nav a').removeClass('active');
        $(this).addClass('active');
    });
    //Use smooth scrolling when clicking on navigation
    $('.navbar-nav a').click(function () {
        if (location.pathname.replace(/^\//,'') ===
            this.pathname.replace(/^\//,'') &&
            location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-topoffset
                }, 500);
                return false;
            } //target.length
        } //click function
    }); //smooth scrolling
    
    });

    function hideNavbar() {
        var navbar = document.getElementById("nav");
        navbar.style.display = "none";
    }
    
    function showNavbar() {
        var navbar = document.getElementById("nav");
        navbar.style.display = "flex";
    }
    
    document.querySelector("a.button",).addEventListener("click", function() {
        hideNavbar();
    });
    
    document.querySelector(".popup__close").addEventListener("click", function() {
        showNavbar();
        var navbar = document.querySelector('.navbar');
        navbar.style.opacity = 0;
        navbar.style.transform = 'translateY(-100px)';
        navbar.style.transition = 'opacity 1s, transform 1s';
        setTimeout(function() {
            navbar.style.opacity = 1;
            navbar.style.transform = 'translateY(0)';
        }, 100);
    });
    
    document.querySelectorAll("a.card1").forEach(function(card) {
        card.addEventListener("click", function() {
            hideNavbar();
        });
    });
    
    document.querySelectorAll(".popuproject__close").forEach(function(closeButton) {
        closeButton.addEventListener("click", function() {
            showNavbar();
            var navbar = document.querySelector('.navbar');
            navbar.style.opacity = 0;
            navbar.style.transform = 'translateY(-100px)';
            navbar.style.transition = 'opacity 1s, transform 1s';
            setTimeout(function() {
                navbar.style.opacity = 1;
                navbar.style.transform = 'translateY(0)';
            }, 100);
        });
    });

window.sr = ScrollReveal();
    sr.reveal('.navbar', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
});
    sr.reveal('.home_content', {
        duration: 3000,
        origin: 'right',
        distance: '-200px',
        delay: '1500'
});
    sr.reveal('.img-home', {
        duration: 3000,
        delay: '2000',
        opacity: '0'
});
    sr.reveal('.scrollleft', {
        duration: 4000,
        origin: 'right',
        distance: '400px',
});
    sr.reveal('.scrollright', {
        duration: 4000,
        origin: 'left',
        distance: '400px',
});
    sr.reveal('.image-about', {
        duration: 5000,
        opacity: '0',
        scale: '1.5'
});
    sr.reveal('.headings-sections', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
});
    sr.reveal('.resume', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
});
    sr.reveal('.card__content', {
        duration: 3000,
        delay: '1000',
        scale: '1.4',
});
    sr.reveal('.subheadings', {
        duration: 3000,
        opacity: '0',
        scale: '1.5',
});
    sr.reveal('.para_text', {
        duration: 3000,
        opacity: '0',
        scale: '1.5',
});
    sr.reveal('.cardproject', {
        duration: 5000,
        opacity: '0',
});
    sr.reveal('.contactme', {
        duration: 3000,
        origin: 'top',
        distance: '-100px'
});

