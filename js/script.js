function navSlide() {
    const navItem1 = document.querySelector('.link_box1');
    const navItem2 = document.querySelector('.link_box2');
    const navItem3 = document.querySelector('.link_box3');
    const navMenu1 = document.querySelector('.sub_menu1');
    const navMenu2 = document.querySelector('.sub_menu2');
    const navMenu3 = document.querySelector('.sub_menu3');
    const navLink1 = document.querySelector('sub_link1');
    const navLink2 = document.querySelector('.sub_link2');
    const navLink3 = document.querySelector('.sub_link3');

    navItem2.addEventListener('click', () => {
        navMenu2.classList.toggle('show');
        navLink2.classList.toggle('show');
    })
    navItem3.addEventListener('click', () => {
        navMenu3.classList.toggle('show');
        navLink3.classList.toggle('show');
    })
    // navItem.addEventListener('mouseover', () => {
    //     navMenu.classList.toggle('show');
    // })
}
navSlide();

function closeNavigation() {
    const navIconClose = document.getElementById('nav_icon_close');
    const navIconHamburger = document.getElementById('nav_icon_open');
    const navbar = document.getElementById('navbar');
    navIconHamburger.addEventListener('click', () => {
        navbar.classList.add('show');
        navIconHamburger.classList.remove('show');
        navIconClose.classList.add('show');
    })
    navIconClose.addEventListener('click', () => {
        navbar.classList.remove('show');
        navIconClose.classList.remove('show');
        navIconHamburger.classList.add('show');
    })
}
closeNavigation();

function showFeatOne() {
    const showMoreBtn = document.getElementById('show_feat_one');
    const featOneDetails = document.getElementById('feat_one');
    showMoreBtn.addEventListener("click", () => {
        if (featOneDetails.classList.contains('show')) {
            featOneDetails.classList.remove('show');
            showMoreBtn.innerHTML = 'SHOW MORE'
        }
        else {
            featOneDetails.classList.add('show');
            showMoreBtn.innerHTML = 'SHOW LESS'
        }
        
    });
}

function showFeatTwo() {
    const showMoreBtn = document.getElementById('show_feat_two');
    const featOneDetails = document.getElementById('feat_two');
    showMoreBtn.addEventListener("click", () => {
        if (featOneDetails.classList.contains('show')) {
            featOneDetails.classList.remove('show');
            showMoreBtn.innerHTML = 'SHOW MORE'
        }
        else {
            featOneDetails.classList.add('show');
            showMoreBtn.innerHTML = 'SHOW LESS'
        }
        
    });
}
showFeatOne();
showFeatTwo();

function blastLetter() {
    const letterInput = document.getElementById('word_x');
    let blast_output = document.getElementById('blast_output');
    letterInput.addEventListener('input', () => {
        blast_output.innerHTML = letterInput.value;
        blast_output.classList.add('blast_state');
        setTimeout(() => {
            blast_output.classList.remove('blast_state');
        }, 500);
    });
}
blastLetter();
console.log('Hello');