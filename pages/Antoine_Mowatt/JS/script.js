// MAP API
var map = L.map('map').setView([29.9509, -90.0758], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Homepage Scroll Transitions
function showDiv() {
    const windowSpace = window.innerHeight;
    const calcWindowSpace = windowSpace / 1.5;
    const divs = document.querySelectorAll('.rCont');

    divs.forEach((div) => {
        const divTop = div.getBoundingClientRect().top;
        const divBtm = div.getBoundingClientRect().bottom;
        if (divTop < calcWindowSpace || divBtm < (calcWindowSpace / 2)) {
            div.classList.remove('hide');
        }
        else {
            div.classList.add('hide');
        }
    });
}
window.addEventListener('scroll', showDiv);


// Nav Action - Sub Nav Menu 
const portfolioBtn = document.querySelector('#portBtn');
const subNavOne = document.getElementById('subNavOne');

// window.onmouseover = function showPortfolioNav(ev) {
//     if (ev.target == portfolioBtn || !subNavOne)
//     subNavOne.classList.add('show');
//     else {
//         subNavOne.classList.remove('show');
//     }
// }
window.onclick = function showPortfolioNav(ev) {
    if (ev.target == portfolioBtn || !subNavOne)
    subNavOne.classList.add('show');
    else {
        subNavOne.classList.remove('show');
    }
}