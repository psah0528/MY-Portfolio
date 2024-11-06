const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeList = document.querySelectorAll('.resume-list');
const resumeBox = document.querySelectorAll('.resume-box');

const portfolioList = document.querySelectorAll('.portfolio-list');
const portfolioBox = document.querySelectorAll('.portfolio-box');


// navbar actions and all section actions along with cube rotation when navbar is clicked
navs.forEach((nav,idx) => {
  nav.addEventListener('click' , () => {
   document.querySelector('.nav-list li.active').classList.remove('active');
   nav.classList.add('active');
   cube.style.transform = `rotateY(${idx * -90}deg)`;

   document.querySelector('.section.active').classList.remove('active');
   sections[idx].classList.add('active');

   const array = Array.from(sections);
   const arrSecs = array.slice(1 , -1); // only use indexs 1,2,3,or does 
   arrSecs.forEach(arrSec => {
    if (arrSec.classList.contains('active')){
      // console.log('ok');
      sections[4].classList.add('action-contact');
    }
   });
   if(sections[0].classList.contains('active')){
    sections[4].classList.remove('action-contact');

   }
  
  });
 });

// resume section when clicking tab-list
 resumeList.forEach((list,idx) => {
  list.addEventListener('click' , () => {
   document.querySelector('.resume-list.active').classList.remove('active');
   list.classList.add('active');

   document.querySelector('.resume-box.active').classList.remove('active');
   resumeBox[idx].classList.add('active');
  });
 });

// portfolio section when clicking tab-list
portfolioList.forEach((list,idx) => {
 list.addEventListener('click' , () => {
  document.querySelector('.portfolio-list.active').classList.remove('active');
  list.classList.add('active');

  document.querySelector('.portfolio-box.active').classList.remove('active');
   portfolioBox[idx].classList.add('active');
 });
});


// visibility for contact section when reloading (cube reloading animation)

setTimeout(() => {
  sections[4].classList.remove('active');
}, 1500)