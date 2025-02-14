
const mobileMenu = document.querySelector('.mobile-menu')
document.getElementById('openMenu').addEventListener('click', () => {
    mobileMenu.classList.remove('hidden')
})
document.getElementById('closeMenu').addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
})
document.getElementById('year').innerText = new Date().getFullYear()