// --------------------scrollTop--------------------------------

//Variables

//Get the button:
const scrollButton = document.querySelector(".scroll-top-button");

const showHideButton = function() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    // scrollButton.style.display = "block";
    scrollButton.classList.add("scroll-top-button--active");
  } else {
    // scrollButton.style.display = "none";
    scrollButton.classList.remove("scroll-top-button--active");
  }
}

// When the user clicks on the button, scroll to the top of the document
// TO DO: check if works cross-browser
const scrollTop = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" 
  });
}

//Events

scrollButton.addEventListener("click", scrollTop);
window.addEventListener("scroll", showHideButton);



// --------------------switchMode--------------------------------

//Variables

const modeButton = document.querySelector(".mode-switcher");
const modeText = document.querySelector(".mode-switcher-text")

const switchMode = function() {
  const body = document.querySelector("body");
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    modeText.innerText = "light";
  } else {
    body.classList.add("light-mode");
    modeText.innerText = "dark";
  }
}

//Events

modeButton.addEventListener("click", switchMode);


// --------------------Accordion--------------------------------

//Variables

const accordionHeader = document.querySelectorAll(".entry-item-header");

accordionHeader.forEach(accordionHeader => {
  accordionHeader.addEventListener("click", event => {
    accordionHeader.classList.toggle("active");
  });
});


//Events

