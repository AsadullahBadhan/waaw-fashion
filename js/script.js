//sticky top nav
window.addEventListener('scroll', function () {
    const stickyNav = document.querySelector('.sticky-nav');

    stickyNav.classList.toggle("sticky", window.scrollY > 0);
})


// toggle category tab
function showCategory(e, category) {
    const categoryItems = document.querySelectorAll('.new-arrival .category');
    for (let i = 0; i < categoryItems.length; i++) {
        categoryItems[i].style.display = 'none';
    }

    const newArrivalCategoris = document.querySelectorAll('.new-arrival .category-title');
    for (let i = 0; i < newArrivalCategoris.length; i++) {
        newArrivalCategoris[i].classList.remove('active')
    }

    document.getElementById(category).style.display = 'block';
    e.currentTarget.className += " active";
}

document.getElementById('defaultShow').click()

//back to top button
const backToTopBtn = document.getElementById('top');

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = "inline-flex";
    } else {
        backToTopBtn.style.display = "none";
    }
}