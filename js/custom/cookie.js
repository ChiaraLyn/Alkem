const cookieContainer = document.querySelector(".cookie_container");
const cookieButton = document.querySelector(".cookie_btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("appear");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("appear");
  }
}, 2000);

