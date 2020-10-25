//show menu

const nav = document.querySelector(".menu__mobile");
const menuBtn = document.querySelector(".hamburger");
const menuImg = document.querySelector(".hamburger__img");
let btn = true;

switchNav = () => {
  !btn
    ? ((menuImg.src = "images/icon-hamburger.svg"),
      (menuImg.alt = "menu close"),
      (menuImg.style.color = "--darkGray"),
      (nav.style.display = "none"))
    : ((menuImg.src = "images/icon-close.svg"),
      (menuImg.alt = "menu open"),
      (nav.style.display = "flex"));

  btn = !btn;
  console.log(btn);
};

menuBtn.addEventListener("click", switchNav);

// slider

const btnPrev = document.querySelector(".btn__previous");
const btnNext = document.querySelector(".btn__next");
const title = document.querySelector(".article__title");
const article = document.querySelector(".article__description");
let bannerImg = document.querySelector(".banner");

const imgArray = [
  "(/images/desktop-image-hero-1.jpg)",
  "(/images/desktop-image-hero-2.jpg)",
  "(/images/desktop-image-hero-3.jpg)",
];
const titleArray = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];
const textArray = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];
curIndex = 0;

btnNext.addEventListener("click", () => {
  bannerImg.style.backgroundImage = `url${imgArray[curIndex]}`;
  title.textContent = titleArray[curIndex];
  article.textContent = textArray[curIndex];
  curIndex++;

  if (curIndex == imgArray.length) return (curIndex = 2);
});

// btnNext.addEventListener("keyup", (event) => {
//   bannerImg.style.backgroundImage = `url${imgArray[curIndex]}`;
//   title.textContent = titleArray[curIndex];
//   article.textContent = textArray[curIndex];
//   curIndex++;
//   if (event.keyCode === 39) {
//     curIndex++;
//   } else if (event.keyCode === 39 || curIndex == imgArray.length)
//     return (curIndex = 2);

//   console.log(curIndex);
// });

btnPrev.addEventListener("click", (e) => {
  bannerImg.style.backgroundImage = `url${imgArray[curIndex]}`;
  title.textContent = titleArray[curIndex];
  article.textContent = textArray[curIndex];
  curIndex--;

  if (curIndex < 0) return (curIndex = 0);
});
