// Selecting the menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Corrected selector
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Scroll event listener
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Corrected to get the 'id' attribute

        // Check if the current section is in view
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                // Corrected query selector to remove the space after 'a'
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Toggle navbar for mobile menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Ensure you have a 'bx-x' class defined for the menu close icon
    navbar.classList.toggle('active'); // Toggle active class on the navbar
};

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}