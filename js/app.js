//EventListeners list
document.addEventListener("DOMContentLoaded", navBarMenu, false);
document.addEventListener("DOMContentLoaded", currentSection, false);
document.addEventListener("DOMContentLoaded", scrollToSection, false);
document.addEventListener("DOMContentLoaded", menuBar, false);
document.addEventListener("DOMContentLoaded", scrollToTop, false);

// sellct all sections
const navSections = document.querySelectorAll("section");
//puild up DOM fragment
const fragment = document.createDocumentFragment();
//gets the navbar from html by Id
const navBarList = document.getElementById("navbar__list");

// build the navMenu
function navBarMenu() {
  //loop through sections
  for (const navSection of navSections) {
    //create list to contain the sections
    const listItem = document.createElement("li");
    //create every section anchor
    const navAnchor = document.createElement("a");
    navAnchor.textContent = navSection.dataset.nav;
    navAnchor.classList.add("menu__link");
    //append the anchor to it`s section
    listItem.appendChild(navAnchor);
    //adding the list to the DOM fragment
    fragment.appendChild(listItem);
  }
  //add the fragment to the navigation menu
  navBarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function currentSection() {
  // add scroll event listener
  window.addEventListener("scroll", function () {
    //select all anchors
    const links = document.querySelectorAll("a.menu__link");
    //loop on all sections
    for (const navSection of navSections) {
      // access the title
      const sectionTitle = navSection.dataset.nav;
      const sectionTop = navSection.getBoundingClientRect().top;
      // finds which section in the top of the view
      if (sectionTop >= 0 && sectionTop <= 300) {
        navSection.classList.add("your-active-class");
        for (const link of links) {
          if (link.textContent === sectionTitle) {
            link.classList.add("your-active-class");
          } else {
            link.classList.remove("your-active-class");
          }
        }
      } else {
        navSection.classList.remove("your-active-class");
      }
    }
  });
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(){
  navBarList.addEventListener("click",function(eventListener){
    eventListener.preventDefault();
    const currentSection = document.querySelector(`[data-nav="${eventListener.target.textContent}"]`);
    currentSection.scrollIntoView({
      behavior: "smooth",
      block: "center"
  })
  });
}


// Build menu for small screens
function menuBar(){
  const menuBtn=document.querySelector(".menu__btn");
  menuBtn.addEventListener("click",function(){
    const menuLinks=document.querySelectorAll(".menu__link");
    for (const menulink of menuLinks) {
      if (menulink.style.display === 'none'){
        menulink.style.display = 'block';
    } else {
        menulink.style.display = 'none';
    }
}
  });
}

// Scroll to top on reaching footer
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const rootElement = document.documentElement;
scrollToTopBtn.addEventListener("click", scrollToTop)
function scrollToTop (){
  // scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
