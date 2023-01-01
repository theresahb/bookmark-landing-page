const accordionTitles = document.querySelectorAll('.accordion-title')
const accordionContent = document.querySelectorAll('.accordion-content')
const arrows = document.querySelectorAll("img[alt='arrow']")

accordionTitles.forEach(accordionTitle => {
    accordionTitle.addEventListener('click', () => {
        accordionTitle.classList.toggle('open')
    })
});

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        arrow.classList.toggle('rotate')
    })
});


const tabTitle = document.querySelectorAll('.tab-title');
const tabContent = document.querySelectorAll('.tab-content');

for (let f = 0; f < tabTitle.length; f++) {
    tabContent[0].addEventListener('click', function(){
        tabTitle[0].classList.add('tab-shown');
        tabTitle[1].classList.remove('tab-shown');
        tabTitle[2].classList.remove('tab-shown');
    });
    tabContent[1].addEventListener('click', function(){
        tabTitle[1].classList.add('tab-shown');
        tabTitle[0].classList.remove('tab-shown');
        tabTitle[2].classList.remove('tab-shown');
    });
    tabContent[2].addEventListener('click', function(){
        tabTitle[2].classList.add('tab-shown');
        tabTitle[0].classList.remove('tab-shown');
        tabTitle[1].classList.remove('tab-shown');
    });
}

tabTitle[0].addEventListener('click', function(){
    tabContent[0].style.display = 'inherit';
    tabContent[1].style.display = 'none';
    tabContent[2].style.display = 'none';
});
tabTitle[1].addEventListener('click', function(){
    tabContent[1].style.display = 'inherit';
    tabContent[0].style.display = 'none';
    tabContent[2].style.display = 'none';
});
tabTitle[2].addEventListener('click', function(){
    tabContent[2].style.display = 'inherit';
    tabContent[0].style.display = 'none';
    tabContent[1].style.display = 'none';
});


let hamburger = document.querySelector('.hamburger')
let closeBtn = document.querySelector('.close')
let menu = document.querySelector('#menu')


hamburger.addEventListener('click', () => {
    menu.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
})


const contact_btn = document.querySelector('.contact');
const error = document.querySelector('.error');
const noError = document.querySelector('.success-input');
const email = document.getElementById('email');


contact.addEventListener('click', (e)=>{
    e.preventDefault();
    const email_value = document.getElementById('email').value;
    const emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)(\.[a-z]+)(.[a-z]+)?$/

    if (emailRegex.test(email_value)) {
        error.style.display = 'none';
        noError.style.display = 'flex';
        email.classList.add('green')
        email.classList.remove('red')
    } else{
        error.style.display = 'flex';
        noError.style.display = 'none';
        email.classList.remove('green')
        email.classList.add('red');
    };
})