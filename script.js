const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));

const form = document.querySelector("#contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent("Synergy Sarajevo website inquiry");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:synergy.sarajevo@gmail.com?subject=${subject}&body=${body}`;
  });
}
