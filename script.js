document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.scrollButton');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        var targetId = this.getAttribute('data-id');
        targetId = targetId.replace('#', '');
        var element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          console.error("Target element not found");
        }
      });
    });
  });


/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var scrollToTopBtn = document.getElementById("scrollToTop");

// Add a click event listener to the button
scrollToTopBtn.addEventListener("click", function() {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling behavior
    });
});