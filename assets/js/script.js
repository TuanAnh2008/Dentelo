

// Query selector
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Scroll to top Function
function scrollToTop() {

const topBtn = $('#toTop');

topBtn.onclick = e => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.onscroll = e => {
    if(window.scrollY > 158) {
        topBtn.style.opacity = '1'
        topBtn.style.visibility = 'visible'
    } else {
        console.log('?')
        topBtn.style.opacity = '0'
        topBtn.style.visibility = 'hidden'
    }
}
}


// Menu Function
function menuHandle() {
        const headerMenu = $('.header-menu')
    const headerNavbar = $('.header-bottom__navbar-list')
    headerMenu.onclick = e => {
    headerNavbar.classList.toggle('active')
    }

    headerNavbar.onclick = e => {
    headerNavbar.classList.toggle('active')
    }
}


// All Function
function allFunction() {
    scrollToTop();
    menuHandle();
}

allFunction();