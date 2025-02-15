document.addEventListener("DOMContentLoaded", () => {
    // Scroll smooth pentru navigație
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    //Efect animatie ASES

    function animateASES() {
        const asesText = document.getElementById("ases-text");
        if (!asesText) return;

        asesText.innerHTML = ""; // Șterge textul anterior
        const text = "ASES";

        // Creăm fiecare literă ca un <span>
        for (let i = 0; i < text.length; i++) {
            let span = document.createElement("span");
            span.textContent = text[i];
            span.style.opacity = "0";
            span.style.position = "relative";
            span.style.right = "-50px"; // Litera începe din dreapta
            span.style.transition = "opacity 0.5s ease, right 0.5s ease";
            asesText.appendChild(span);
        }

        // Aplică efectul treptat pentru fiecare literă
        const letters = asesText.querySelectorAll("span");
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.opacity = "1";
                letter.style.right = "0"; // Se deplasează la poziția normală
            }, index * 500); // Delay de 500ms între litere
        });
    }

// Rulează animația inițial și apoi la fiecare 5 secunde
    setTimeout(() => {
        animateASES();
        setInterval(animateASES, 5000);
    }, 1000);
//////////////////////////////////////////////////////////

        const homeBtn = document.getElementById("homeBtn");
        const despreSection = document.getElementById("despre");

        if (homeBtn && despreSection) {
            homeBtn.addEventListener("click", function () {
                despreSection.scrollIntoView({ behavior: "smooth" });
            });
        } else {
            console.error("Butonul sau secțiunea 'Despre' nu au fost găsite!");
        }



    // Validare formular de contact
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const nume = document.getElementById("nume").value.trim();
        const email = document.getElementById("email").value.trim();
        const mesaj = document.getElementById("mesaj").value.trim();

        if (nume === "" || email === "" || mesaj === "") {
            alert("Toate câmpurile sunt obligatorii!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Introduceți un email valid!");
            return;
        }

        alert("Mesaj trimis cu succes!");
        this.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});

// Lista imaginilor pentru slider
// Lista imaginilor pentru slider
const sliderImages = [
    "images/despre.jpg",
    "images/despre1.jpg",
    "images/despre2.jpg"
];

let currentIndex = 0;
const slider = document.querySelector(".slider img");
const prevButton = document.getElementById("prevSlide");
const nextButton = document.getElementById("nextSlide");

function changeSlide(index) {
    currentIndex = (index + sliderImages.length) % sliderImages.length; // Se asigură că rămâne în interval
    slider.src = sliderImages[currentIndex]; // Schimbă imaginea
}

// Navigare manuală
prevButton.addEventListener("click", () => changeSlide(currentIndex - 1));
nextButton.addEventListener("click", () => changeSlide(currentIndex + 1));

// Schimbare automată la fiecare 3 secunde
let slideInterval = setInterval(() => changeSlide(currentIndex + 1), 3000);

// Oprire auto-slide la interacțiune și reluare după 5 secunde
function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide(currentIndex + 1), 3000);
}

prevButton.addEventListener("click", resetInterval);
nextButton.addEventListener("click", resetInterval);


