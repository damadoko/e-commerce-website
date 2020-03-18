const icon = document.querySelector(".shopping-cart");
icon.addEventListener("click", () => {
  document.querySelector("#cart-modal").classList.toggle("show");
});

console.log("app-stared");
