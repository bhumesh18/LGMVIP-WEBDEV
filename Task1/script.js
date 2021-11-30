const scrollLeftElements = document.querySelectorAll(".js-scroll-left");
const scrollRightElements = document.querySelectorAll(".js-scroll-right");
const scrollGalleryElements = document.querySelectorAll(".gallery-column");

const main = document.querySelector("main");
const header = document.querySelector("header");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting us, we will get in touch with you briefly.");
});

const elementInView = (el, dividend = 1.5) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element, cls) => {
  element.classList.add(cls);
};

const handleScrollAnimation = () => {
  scrollLeftElements.forEach((el) => {
    if (elementInView(el, 1.3)) {
      displayScrollElement(el, "scrolled-left");
    }
  });

  scrollRightElements.forEach((el) => {
    if (elementInView(el, 1.3)) {
      displayScrollElement(el, "scrolled-right");
    }
  });

  if (elementInView(scrollGalleryElements[0])) {
    displayScrollElement(scrollGalleryElements[0], "scrolled-top");
    displayScrollElement(scrollGalleryElements[0], "order-1");

    displayScrollElement(scrollGalleryElements[1], "scrolled-bottom");
    displayScrollElement(scrollGalleryElements[1], "order-2");

    displayScrollElement(scrollGalleryElements[2], "scrolled-top");
    displayScrollElement(scrollGalleryElements[2], "order-3");
  }
};

const mainSectionInView = (mainSection) => {
  const distance = mainSection.getBoundingClientRect().top;
  if (distance <= 0) {
    header.style.background = "rgba(255, 255, 255, 1)";
    return;
  }
  header.style.background = "rgba(255, 255, 255, 0.5)";
};

window.addEventListener("scroll", () => {
  mainSectionInView(main);
  handleScrollAnimation();
});