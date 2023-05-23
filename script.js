document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".menu");
  const navLinks = document.querySelector(".navOnSmallSceeen");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      toggleBtn.classList.add("clicked");
      navLinks.classList.add("model");
      navLinks.classList.toggle("hidden");
      console.log("clicked");
    });
  } else console.log("toggleBtn not seen");
});

if (document.querySelector(".pricing-page")) {
  const key = document.querySelector(".switch-key");

  key.addEventListener("click", function (e) {
    e.preventDefault();
    const key = e.target;
    const action = key.dataset.action;
    const dataLand = document.querySelector('[data-action="land"]');
    const dataAir = document.querySelector('[data-action="air"]');
    const dataSea = document.querySelector('[data-action="sea"]');

    if (action === "land") {
      dataAir.classList.remove("active-key");
      dataSea.classList.remove("active-key");
      key.classList.toggle("active-key");
    } else if (action === "air") {
      dataLand.classList.remove("active-key");
      dataSea.classList.remove("active-key");
      key.classList.toggle("active-key");
    } else if (action === "sea") {
      dataLand.classList.remove("active-key");
      dataAir.classList.remove("active-key");
      key.classList.toggle("active-key");
    }
  });
}

if (document.querySelector(".faq-page")) {
  const faqBtn = document.querySelectorAll(".plusbtn");

  const faqMessage = document.querySelectorAll(".accodian-message");

  for (let i = 0; i < faqBtn.length; i++) {
    faqBtn[i].addEventListener("click", function () {
      if (faqBtn[i].textContent === "+") {
        faqBtn[i].textContent = "-";
      } else {
        faqBtn[i].textContent = "+";
      }

      for (let i = 0; i < faqMessage.length; i++) {
        faqMessage[i].classList.toggle("hidden");
      }
    });
  }
}
