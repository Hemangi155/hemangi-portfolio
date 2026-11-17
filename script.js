/* ==============================
   TYPING ANIMATION
================================ */

const typingText = document.getElementById("typing-text");

const roles = [
    "Computer Science Student",
    "Developer",
    "Microsoft Student Ambassador",
    "GSSoC Contributor",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    charIndex += isDeleting ? -1 : 1;

    typingText.textContent =
        currentRole.substring(0, charIndex);

    let speed = isDeleting ? 45 : 85;

    if (!isDeleting && charIndex === currentRole.length) {

        speed = 1400;
        isDeleting = true;

    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        speed = 350;

    }

    window.setTimeout(typeEffect, speed);
}

typeEffect();


/* ==============================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* ==============================
   SCROLL REVEAL ANIMATION
================================ */

const revealElements = document.querySelectorAll(

    ".section-heading, .about-card, .stat-card, .skill-card, " +
    ".project-card, .achievement-card, .contact-card"

);


if ("IntersectionObserver" in window) {

    revealElements.forEach(element => {

        element.classList.add("reveal");

    });


    const observer = new IntersectionObserver(

        (entries, observerInstance) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observerInstance.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach(element => {

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* ==============================
   AUTOMATIC COPYRIGHT YEAR
================================ */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}