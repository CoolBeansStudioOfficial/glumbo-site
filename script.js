let logo = document.querySelector(".logo");
let download = document.getElementById("download");
let section = document.getElementById("section");

logo.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth", block: "center" });
});

download.addEventListener("click", function () {
    section.scrollIntoView({ behavior: "smooth", block: "center" });
});