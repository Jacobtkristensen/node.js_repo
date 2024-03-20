const copyrightYearP = document.getElementById("copyright-year");
const currentYear = new Date().getFullYear();
copyrightYearP.textContent = "All rights reserved ©" + currentYear;


// Get the button
var mybutton = document.getElementById("to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Optionally, you could add a smooth scroll behavior to the button
mybutton.addEventListener('click', function(){
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
});

