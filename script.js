const menu = document.querySelector(".primary-nav");
const openButton = document.querySelector(".menu-toggle");
const closeButton = document.querySelector(".menu-close");

function setMenu(open) {
  if (!menu || !openButton) return;
  menu.classList.toggle("open", open);
  openButton.setAttribute("aria-expanded", String(open));
  openButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}
openButton?.addEventListener("click", () => setMenu(true));
closeButton?.addEventListener("click", () => setMenu(false));
menu?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") setMenu(false);
});
