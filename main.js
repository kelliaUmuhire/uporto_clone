let nav = document.querySelector("nav");
let sticky = nav.offsetTop;

const toggleMenu = () => {
  document.getElementById("menuLinks").classList.toggle("hidden");
  document.getElementById("menuLinks").classList.toggle("flex");
};

const checkPosition = () => {
  if (window.scrollY >= sticky) {
    nav.classList.add("fixed_navbar");
  } else {
    nav.classList.remove("fixed_navbar");
  }
};

window.addEventListener("scroll", checkPosition);
