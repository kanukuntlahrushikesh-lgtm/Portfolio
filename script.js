// Pointer follow and click effect
const pointer = document.querySelector(".pointer-dot");

document.addEventListener("mousemove", (e) => {
    pointer.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
});

document.addEventListener("mousedown", () => {
    pointer.classList.add("pointer-active");
});

document.addEventListener("mouseup", () => {
    pointer.classList.remove("pointer-active");
});

// Scroll spy for nav (works with stacked sections)
const sections = document.querySelectorAll(".track-section");
const navLinks = document.querySelectorAll(".nav-link");

function onScroll() {
    const scrollPos = window.scrollY;
    let currentId = "";

    sections.forEach((section) => {
        const top = section.offsetTop - 200;
        if (scrollPos >= top) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const match = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", match);
    });
}

window.addEventListener("scroll", onScroll);
onScroll();

// Smooth scroll on nav click
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: "smooth",
        });
    });
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}