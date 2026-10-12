/* =========================================
   HERO SLIDESHOW
========================================= */

const heroSlides =
    document.querySelectorAll(".hero-slide");

const heroDots =
    document.querySelectorAll(".hero-dot");

const previousButton =
    document.querySelector(".hero-prev");

const nextButton =
    document.querySelector(".hero-next");


let currentHeroSlide = 0;

let heroTimer;


/* =========================================
   SHOW SLIDE
========================================= */

function showHeroSlide(index) {

    if (index >= heroSlides.length) {

        currentHeroSlide = 0;

    }

    else if (index < 0) {

        currentHeroSlide =
            heroSlides.length - 1;

    }

    else {

        currentHeroSlide = index;

    }


    heroSlides.forEach(
        function(slide) {

            slide.classList.remove(
                "active"
            );

        }
    );


    heroDots.forEach(
        function(dot) {

            dot.classList.remove(
                "active"
            );

        }
    );


    heroSlides[currentHeroSlide]
        .classList.add("active");


    if (heroDots[currentHeroSlide]) {

        heroDots[currentHeroSlide]
            .classList.add("active");

    }

}


/* =========================================
   NEXT
========================================= */

function nextHeroSlide() {

    showHeroSlide(
        currentHeroSlide + 1
    );

}


/* =========================================
   PREVIOUS
========================================= */

function previousHeroSlide() {

    showHeroSlide(
        currentHeroSlide - 1
    );

}


/* =========================================
   AUTO PLAY
========================================= */

function startHeroSlideshow() {

    clearInterval(heroTimer);


    heroTimer = setInterval(
        nextHeroSlide,
        4000
    );

}


/* =========================================
   NEXT BUTTON
========================================= */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function() {

            nextHeroSlide();

            startHeroSlideshow();

        }
    );

}


/* =========================================
   PREVIOUS BUTTON
========================================= */

if (previousButton) {

    previousButton.addEventListener(
        "click",
        function() {

            previousHeroSlide();

            startHeroSlideshow();

        }
    );

}


/* =========================================
   DOTS
========================================= */

heroDots.forEach(
    function(dot) {

        dot.addEventListener(
            "click",
            function() {

                const slideIndex =
                    Number(
                        this.dataset.slide
                    );


                showHeroSlide(
                    slideIndex
                );


                startHeroSlideshow();

            }
        );

    }
);


/* =========================================
   START SLIDESHOW
========================================= */

if (heroSlides.length > 0) {

    showHeroSlide(0);

    startHeroSlideshow();

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            formMessage.textContent =
                "Thank you. This contact form is currently a demonstration.";

        }
    );

}