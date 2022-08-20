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
window.addEventListener('scroll', () => {
   let current = '';
   sections.forEach(section => {
      const sectiontop = section.offsetTop;
      if (pageYOffset > sectiontop) {
         current = section.getAttribute('id');
      }
   })
   sections.forEach(section => {
      section.classList.remove('active');
      if (section.id === current) {
         section.classList.add('active');
      }
   })
})

// Scroll to anchor ID using scrollTO event
$('.nav_link').click(function(e){
   e.preventDefault();
   var target = $($(this).attr('href'));
   if(target.length){
     var scrollTo = target.offset().top;
     $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
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




