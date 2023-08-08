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
    xicon.classList.remove('fa-xmark')
}
))

const xicon = document.querySelector('#icon')

const changeIcon = () => {
    xicon.classList.toggle('fa-xmark')
}

// CONTACT ME

const sendBtn = document.querySelector('#send-btn')
const modal = document.querySelector('#modal')
const allInputs = document.querySelectorAll('.inputs')

sendBtn.addEventListener('click', e => 
{
    e.preventDefault();
    checkInputs();
    checkEmail(email);
    checking();
 
})

const checking = () => {
    let errorCount = 0

    allInputs.forEach(el => {
        if(el.classList.contains('inputs-error')) {
            errorCount++;
        }
    })

    if(errorCount === 0 ) {
        modal.classList.remove('hidden')
    }
    console.log(errorCount);
}


const checkInputs = () => {
    allInputs.forEach(el => {
        if(el.value == '') {
      
            el.classList.add('inputs-error');
        } else {
    
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
     
        email.classList.remove('inputs-error')

    } else { 

        email.placeholder = 'Wrong email address!!'  
        email.value = ''
        email.classList.add('inputs-error')
    }
}

const closeBtn = document.querySelector('#close-btn')

closeBtn.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.add('hidden');

    allInputs.forEach(el => {
        el.value = ''
    })
})

