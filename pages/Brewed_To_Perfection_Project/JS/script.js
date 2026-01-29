// Global Variables
// Quiz

// Functions
function openCloseNav() {
    const hamburger = document.getElementById('expandNav');
    const navbar = document.getElementById('nav');
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('show');
    });
}
function promoTimer() {
    const clock = document.getElementById('PromoTimerPrompt');
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    let isCurrentDate = new Date();
    let isCurrentTime = Math.round(((isCurrentDate.getTime()) / minute) / hour);
    clock.innerHTML = isCurrentTime;    
    if (isCurrentTime > 0) {
    setInterval(() => {
        isCurrentTime -= 1;
        clock.innerHTML = isCurrentTime;    
    }, 3600000);
    }
}

function closePromo() {
    const closeBtn = document.getElementById("closePromo");
    const promoPreview = document.getElementById("promoPreview");
    closeBtn.addEventListener('click', () => {
        promoPreview.style.display = 'none';
    })
}
// Events
window.onload = () => {
    const promoPreview = document.getElementById("promoPreview");
    setTimeout(() => {
        promoPreview.style.display = "block";
    }, 5000);
}
promoTimer();
closePromo();
openCloseNav();