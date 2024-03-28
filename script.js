const selectField = document.querySelector(".selectField");
const selectText = document.querySelector("#selectText");
const options = document.querySelectorAll(".options");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon");

selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
});


options.forEach(option => {
    option.addEventListener("click", (e) => {
        selectField.firstElementChild.innerHTML = e.target.innerText;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    });
});