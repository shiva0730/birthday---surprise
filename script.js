const photos = [
    "WhatsApp Image 2026-01-01 at 23.17.04.jpeg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg"
];

let index = 0;

// Open the gift and start music + slideshow
function openGift() {
    document.getElementById("giftScreen").style.display = "none";
    document.getElementById("mainPage").classList.remove("hidden");

    const music = document.getElementById("bgMusic");
    music.play().catch(() => {
        console.log("Music playback requires user interaction.");
    });

    startSlideShow();
}

// Photo slideshow
function startSlideShow() {
    const img = document.getElementById("slide");

    setInterval(() => {
        index++;
        if (index >= photos.length) {
            index = 0;
        }

        img.style.opacity = 0;

        setTimeout(() => {
            img.src = photos[index];
            img.style.opacity = 1;
        }, 500);

    }, 3000);
}

// Final surprise
function showFireworks() {

    document.getElementById("fireworkText").classList.remove("hidden");

    createConfetti();

    alert("🎉 Happy Birthday Chandhana! ❤️\n\nForever Best Friends!\n\nLove,\nShiva ❤️");
}

// Confetti using emoji
function createConfetti() {

    const emojis = ["🎉","🎊","✨","❤️","💖","🌸","🎈"];

    for (let i = 0; i < 80; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (20 + Math.random()*25) + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        let pos = -20;

        const speed = 2 + Math.random()*4;

        const timer = setInterval(() => {

            pos += speed;

            confetti.style.top = pos + "px";

            confetti.style.transform =
                "rotate(" + pos * 5 + "deg)";

            if (pos > window.innerHeight + 50) {

                clearInterval(timer);

                confetti.remove();

            }

        }, 20);

    }

}

// Fade effect for slideshow
window.onload = () => {
    const img = document.getElementById("slide");
    if (img) {
        img.style.transition = "opacity 0.6s ease";
    }
};
