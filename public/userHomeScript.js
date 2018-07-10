//DOCUMENT ELEMENTS
const delBtn = document.getElementsByClassName("deleteButton");

console.log('Script Loaded');

//ADD MOUSEOVER EVENT LISTENER   
delBtn.addEventListener("mouseover", function(target) {   
    // highlight the mouseover target
    event.target.style.backgroundColor = "orange";

    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.backgroundColor = "";
    }, 500);
  }, false);