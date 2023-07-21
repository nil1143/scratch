const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('#nav')

hamburger.addEventListener('click', () => {
   
    if(nav.classList.contains('hidden')) {
        nav.classList.remove('hidden')
    } else {
        nav.classList.add('hidden')
    }})


const navLink= document.querySelectorAll('.nav-link')

navLink.forEach(link => link.addEventListener('click', () => {
    nav.classList.add('hidden')
}))


const xicon = document.querySelector('#icon')

const changeIcon = () => {
    xicon.classList.toggle('fa-xmark')
}