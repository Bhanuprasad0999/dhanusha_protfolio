// Loader

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Typing Animation

var typed = new Typed(".multiple-text", {
    strings: [
        "Data Analyst",
        "Python Developer",
        "SQL Enthusiast",
        "AI Student"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

// Scroll Reveal Animation

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});

ScrollReveal().reveal('.home-img, .project-box, .skill-card, .timeline-box, .internship-card, .cert-card', {
    origin: 'bottom'
});

ScrollReveal().reveal('.about-img', {
    origin: 'left'
});

ScrollReveal().reveal('.about-content', {
    origin: 'right'
});

// Back To Top Button

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// Mobile Menu

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {

    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
        navbar.style.flexDirection = "column";
        navbar.style.position = "absolute";
        navbar.style.top = "80px";
        navbar.style.right = "20px";
        navbar.style.background = "#112e42";
        navbar.style.padding = "20px";
        navbar.style.borderRadius = "10px";
    }

};

// Active Navbar Link

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});

// Particles Background

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80
        },
        color: {
            value: "#00abf0"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3
        },
        move: {
            enable: true,
            speed: 2
        }
    },

    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
});