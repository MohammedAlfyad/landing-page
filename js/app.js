/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sections = document.querySelectorAll('section');
const nav = document.getElementById('navbar__list');
for (let i = 1; i <= sections.length; i++) {
   let sec = document.createElement('li');
   let move = document.createElement('a');
   move.href = `#${sections[i-1].id}`;
   move.innerText = `Section ${i}`;
   move.className = "nav_link";
   sec.appendChild(move);
   nav.appendChild(sec);
}

// Add class 'active' to section when near top of viewport

// on window scroll
window.addEventListener('scroll', (e) => { 
   // loop through each section
   sections.forEach( section => {
 
     // get px distance from top
     const topDistance = section.getBoundingClientRect().top;
 
     // if the distance to the top is between -500 - 100px
     if (topDistance > -500 && topDistance < 100) {
       section.classList.add('active');
     // otherwise, remove the class
     } else {
       section.classList.remove('active');
     }
   });
 });

// Scroll to anchor ID using scrollTO event

document.getElementById('nav--bar').addEventListener('click', function (e) {
   e.preventDefault();
   const target = e.target;
   if (target.classList.contains('nav_link')) {
       const id = target.getAttribute('href').slice(1);
       document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
   }
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
   } else {
      mybutton.style.display = "none";
   }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

// Set sections as active




