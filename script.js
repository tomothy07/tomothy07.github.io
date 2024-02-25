

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('#scrollButton');
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