let logo = document.querySelector(".logo");
let download = document.getElementById("download");

logo.addEventListener("click", function () {
    download.scrollIntoView({ behavior: "smooth", block: "start" });
});