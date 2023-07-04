const shareBtn = document.querySelector(".share");
const shareBtnMbl = document.querySelector(".share_mobile");
const socialHandles = document.querySelector(".social_handles");
const socialHandlesMbl = document.querySelector(".social_handles_Mobile");

shareBtn.addEventListener("click", () => {
  socialHandles.classList.toggle("active");
});

// for Mobile
shareBtnMbl.addEventListener("click", () => {
  socialHandlesMbl.classList.toggle("activee");
  shareBtnMbl.classList.toggle("share_active");
});
