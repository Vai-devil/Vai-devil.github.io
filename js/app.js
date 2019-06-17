const vnav = document.querySelector('.vnav');
const ham = document.querySelector('.hamburger')

ham.addEventListener('click', () => {
    vnav.classList.toggle('active');
})