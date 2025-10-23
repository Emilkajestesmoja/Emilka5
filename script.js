document.addEventListener('DOMContentLoaded', () => {
    // Referencje do elementów DOM
    const robotTextElement = document.getElementById('robot-text');
    const robotContainer = document.getElementById('robot-container');
    const starsContainer = document.getElementById('stars-container');

    // ### ZMIANA TUTAJ ###
    const finalUrl = 'https://emilkajestesmoja.github.io/Emilka5/';

    // Funkcje pomocnicze
    const delay = ms => new Promise(res => setTimeout(res, ms));

    function typeWriter(text) {
        return new Promise(resolve => {
            let i = 0;
            robotTextElement.textContent = '';
            const type = () => {
                if (i < text.length) {
                    robotTextElement.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 50); // Szybkość pisania
                } else {
                    resolve();
                }
            };
            type();
        });
    }

    // Funkcja do tworzenia spadających gwiazd
    function createStars(count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 2 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Czas spadania: 5-10s
            star.style.animationDelay = `${Math.random() * 10}s`;
            star.style.opacity = Math.random() * 0.5 + 0.3;
            starsContainer.appendChild(star);
        }
    }

    // Główna, finałowa sekwencja
    async function playFinalSequence() {
        createStars(50); // Stwórz 50 gwiazd w tle
        await delay(1000);

        await typeWriter("Gratulacje Emilka! Udało Ci się wszystko zrobić.");
        await delay(2000);

        await typeWriter("Teraz pora przejść do prawdziwej strony... to, co miało być od początku.");
        await delay(2500);

        await typeWriter("Więc zaraz zostaniesz przeniesiona do właściwego miejsca.");
        await delay(2000);

        await typeWriter("Ja idę na odpoczynek... nawet nie wiesz, jak Twój chłopak mnie męczył....");
        await delay(3000);

        // Robot się żegna
        await typeWriter("PA PA!");
        robotContainer.classList.add('is-waving'); // Dodaj klasę do machania ręką

        await delay(2500); // Czekaj, aż skończy machać

        // Robot odlatuje
        robotContainer.classList.remove('is-waving');
        robotContainer.classList.add('is-flying');

        // Przekierowanie po chwili
        setTimeout(() => {
            window.location.href = finalUrl;
        }, 1500);
    }

    // Start
    playFinalSequence();
});