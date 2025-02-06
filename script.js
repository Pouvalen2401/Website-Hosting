$(document).ready(function () {
    // Ensure `element` is properly defined before use
    let element = document.documentElement || document.body;

    if (element && element.getBoundingClientRect) {
        console.log(element.getBoundingClientRect().top);
    }

    

    // Change active class on navbar links while scrolling
    $(window).on('scroll', function () {
        const scrollPosition = $(this).scrollTop();

        $('.navbar a').each(function () {
            const targetSection = $($(this).attr('href'));
            if (targetSection.length) {
                const sectionOffset = targetSection.offset().top - 60;
                if (scrollPosition >= sectionOffset) {
                    $('.navbar a').removeClass('active');
                    $(this).addClass('active');
                }
            }
        });
    });

    // Animated entrance effect for the homepage text
    $('.home-page').hide().fadeIn(2000);

    // Smooth scrolling and navbar highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function highlightNav() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
});



