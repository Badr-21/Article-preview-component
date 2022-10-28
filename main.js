const displayAccount = document.querySelector(".display");
const arrowIcon = document.querySelector(".arrow");



arrowIcon.addEventListener("click", function(e) {
    displayAccount.classList.toggle("block");
    arrowIcon.classList.toggle("color")
});
