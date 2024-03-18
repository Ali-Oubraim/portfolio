//Get Elements From Document
let menuIcon = document.querySelector("#menu-icon");
let links = document.querySelectorAll(".navbar a");
let navbar = document.getElementById("navbar");

//Toggle Menu On Click and Switch Icon
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("block");
};

//Make a Navbar link active on clicked and remove it from others
links.forEach((nav) => {
  nav.onclick = (ev) => {
    ev.stopPropagation();
    links.forEach((nav) => {
      nav.classList.remove("active");
    });
    nav.classList.toggle("active");
  };
});

//Close navbar when click anywhere on screen except navbar and menu-icon
document.onclick = (ev) => {
  if (ev.target !== menuIcon && ev.target !== navbar) {
    if (navbar.classList.contains("block")) {
      menuIcon.classList.toggle("fa-xmark");
      navbar.classList.remove("block");
    }
  }
};

//Show msg to user that cv downloaded succecfuly

document.querySelector(".btn-download").onclick = function () {
  const notification = document.createElement("div");
  notification.textContent = "Cv Downloaded Successfuly.";
  notification.style.position = "fixed";
  notification.style.top = "50%";
  notification.style.left = "50%";
  notification.style.zIndex = 9999;
  notification.style.backgroundColor = "#50c4ed";
  notification.style.padding = "10px";
  notification.style.color = "#333a73";

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000); // Remove after 3 seconds
};

//Hide To Top Icon
let topIcon = document.querySelector(".icon-top");
topIcon.style.display = "none";

window.addEventListener("scroll", () => {
  let scroll = this.scrollY;
  if (scroll >= 500) {
    topIcon.style.display = "block";
  }
  if (scroll <= 500) {
    topIcon.style.display = "none";
  }
});
