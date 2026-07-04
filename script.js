window.addEventListener("load", function () {

    // Hide Loader
    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(function () {

            loader.style.display = "none";

        }, 500);

    }

});


/* ==========================
   Smooth Scrolling
========================== */

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/*====================================
    ACTIVE NAVIGATION
====================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/* ==========================
   SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(reveal => {

        const revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            reveal.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
/*==================================
    MOUSE SPOTLIGHT
===================================*/

const spotlight = document.querySelector(".cursor-glow");

if (spotlight) {
    document.addEventListener("mousemove", (e) => {
        spotlight.style.left = e.clientX + "px";
        spotlight.style.top = e.clientY + "px";
    });
}

document.addEventListener("mousemove", (e) => {

    spotlight.style.left = e.clientX + "px";
    spotlight.style.top = e.clientY + "px";

});
/*==================================
        FLOATING PARTICLES
===================================*/

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const particles = [];

const particleCount = 70;

for (let i = 0; i < particleCount; i++) {

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        radius: Math.random() * 2 + 1,

        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4

    });

}

function animateParticles() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;

        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "rgba(25,255,122,0.35)";
        ctx.fill();

    });

    requestAnimationFrame(animateParticles);

}

animateParticles();
/*==================================
        NAVBAR SCROLL EFFECT
===================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
/*==================================
        FAQ ACCORDION
===================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
/*==================================
        COPY CONTRACT
===================================*/

const copyBtn = document.getElementById("copyContract");

if(copyBtn){

    copyBtn.addEventListener("click",()=>{

        const address =
        document.getElementById("contractAddress").value;

        navigator.clipboard.writeText(address);

        copyBtn.innerHTML="Copied ✓";

        setTimeout(()=>{

            copyBtn.innerHTML='<i class="fa-regular fa-copy"></i> Copy';

        },2000);

    });

}
/*==================================
        SCROLL TO TOP
===================================*/

const scrollTopBtn =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollTopBtn.classList.add("show");

    }else{

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/*==================================
        FOOTER YEAR
===================================*/

const year =
document.getElementById("year");

if(year){

    year.textContent =
    new Date().getFullYear();

}
/*==================================
        MOBILE MENU
===================================*/

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar){

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("show");

    });

    navbar.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("show");

        });

    });

}
/*==================================
        ANIMATED COUNTERS
===================================*/

const counters = document.querySelectorAll(".counter");

const runCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 120;

        const update = () => {

            count += speed;

            if(count < target){

                counter.innerText = Math.floor(count).toLocaleString();

                requestAnimationFrame(update);

            }else{

                counter.innerText = target.toLocaleString();

            }

        };

        update();

    });

};

const statSection = document.querySelector(".stats");

if(statSection){

    const observer = new IntersectionObserver(entries => {

        if(entries[0].isIntersecting){

            runCounter();

            observer.disconnect();

        }

    });

    observer.observe(statSection);

}
/*==================================
        CINEMATIC INTRO
===================================*/

window.addEventListener("load", () => {

    const intro = document.getElementById("intro");

    if (!intro) return;

    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.remove();

        }, 1000);

    }, 4000);

});
/*==================================
        COUNTER ANIMATION
===================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 120;

        const update = () => {

            count += increment;

            if (count < target) {

                counter.innerText = Math.floor(count).toLocaleString();

                requestAnimationFrame(update);

            } else {

                counter.innerText = target.toLocaleString();

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});
/*==================================
        MOBILE MENU
===================================*/

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar){

    menuBtn.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}
const mobileLinks = document.querySelectorAll("#navbar a");

mobileLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});