// Will become hidden in a loop, fix me!!!
function showNav() {
    const hamIcon = document.getElementById('ham_btn');
    hamIcon.addEventListener('click', () => {
        if (hamIcon.getAttribute = 'false') {
            hamIcon.setAttribute('aria-expanded', 'true');
            hamIcon.classList.add('rotate_trans');
            setInterval(() => {
                hamIcon.setAttribute('aria-expanded', 'false');
                // hamIcon.classList.remove('rotate_trans');
            }, 5000)
            clearInterval();
            }
    });
}
showNav();