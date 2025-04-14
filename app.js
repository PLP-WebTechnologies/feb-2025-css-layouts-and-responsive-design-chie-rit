const menuButton = document.getElementById('menu')
const navBar = document.getElementById('navbar')

let isNavOpen = false

menuButton.addEventListener('click', (e) => {
    navBar.classList.toggle('is_active')
})