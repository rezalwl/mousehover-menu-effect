const menus = document.querySelectorAll("a");
const animElem = document.querySelector(".anim");
menus.forEach(
  (menu) =>
    (menu.onmouseenter = (e) => {
      animElem.style.width = e.target.offsetWidth + "px";
      animElem.style.left = e.target.offsetLeft + "px";
    })
);
