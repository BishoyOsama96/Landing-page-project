//EventListeners list
document.addEventListener("DOMContentLoaded", navBarMenu, false);

// build the navMenu
function navBarMenu() {
  // sellct all sections
  const navSections = document.querySelectorAll("section");
  //puild up DOM fragment
  const fragment = document.createDocumentFragment();
  //gets the navbar from html by Id
  const navBarList = document.getElementById("navbar__list");
  //loop through sections
  for (const navSection of navSections) {
    //create list to contain the sections
    const listItem = document.createElement("il");
    //create every section anchor
    const navAnchor = document.createElement("a");
    navAnchor.textContent = navSection.dataset.nav;
    navAnchor.classList.add("meun_link");
    //append the anchor to it`s section
    listItem.appendChild(navAnchor);
    //adding the list to the DOM fragment
    fragment.appendChild(listItem);
  }
  //add the fragment to the navigation menu
  navBarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
