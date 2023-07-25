//  NAV

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

// CONTACT ME

const sendBtn = document.querySelector('#send-btn')

sendBtn.addEventListener('click', e => 
{
    e.preventDefault();
    checkInputs()
    checkEmail(email)
    



})

const allInputs = document.querySelectorAll('.inputs')

const checkInputs = () => {
    allInputs.forEach(el => {
        if(el.value == '') {
            console.log('ERROR');
            el.classList.add('inputs-error');
        } else {
            console.log('good');
            el.classList.remove('inputs-error')
        }
    })
}

const email = document.querySelector('#email')
const message = document.querySelector('#message')
const formbox = document.querySelector('#formbox')

const checkEmail = email => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(email.value.match(validRegex)) {
        console.log('Prawidłowy !!');
        email.classList.remove('inputs-error')

    } else { 
        console.log('invalid!!!!');
        email.placeholder = 'Wrong email address!!'  
        email.value = ''
        email.classList.add('inputs-error')
    }
}

const closeBtn = document.querySelector('#')



