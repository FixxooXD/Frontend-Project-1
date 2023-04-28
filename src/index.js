const navv = document.getElementById("nav");
const svg = document.getElementById("service-icon");
const servicesOps = document.getElementById("services-option");

const hamburgerMenu = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');
const mobileNav = document.getElementById('mobileNav')

// nav onscroll
function scrollFunction() {
  let y = window.pageYOffset;
  if (y > 50) {
    navv.classList.add("bg-[#263238]");
  } else {
    navv.classList.remove("bg-[#263238]");
  }
}

// rotate SVG
function svgRotate(){
  if(svg.classList.contains('rotate-180')){
  svg.classList.remove("rotate-180");
  servicesOps.classList.add('hidden')
  }
  else{
    svg.classList.add("rotate-180");
    servicesOps.classList.remove('hidden')
  }
}

//  HamburgerMenu
function navBar(){
    if(mobileNav.classList.contains('hidden')){
       hamburgerMenu.classList.add('hidden');
       closeMenu.classList.remove('hidden');
       mobileNav.classList.remove('hidden');
    }
    else{
      hamburgerMenu.classList.remove('hidden');
      closeMenu.classList.add('hidden');
      mobileNav.classList.add('hidden');

    }
}

function ourWork(){
  window.scrollTo(0,1800)
}

  // if(mobileNav.classList.contains('hidden') || hamburgerMenu.classList.add('hidden')){
  //   hamburgerMenu.classList.add('block');
  //   closeMenu.classList.add('hidden');
  // }
  // else{
  //   mobileNav.classList.contains('block');
  //   hamburgerMenu.classList.add('hidden');
  //   closeMenu.classList.remove('hidden')

  // }
// }
