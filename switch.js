const bio = document.querySelector(".bio");
const work = document.querySelector(".work");
const infobtn = document.querySelector("#infobtn");
const workbtn = document.querySelector("#workbtn");
const extworkbtn = document.querySelector("#extworkbtn");
const body = document.querySelector("body");
bio.style.display = "block";
infobtn.style.textDecoration = "underline";
work.style.display = "none";
workbtn.style.textDecoration = "none";
extworkbtn.style.textDecoration = "underline";
extworkbtn.addEventListener("click", () => {
    work.style.display = "block";
    workbtn.style.textDecoration = "underline";
    bio.style.display = "none";
    infobtn.style.textDecoration = "none";
})
infobtn.addEventListener("click", () => {
    work.style.display = "none";
    workbtn.style.textDecoration = "none";
    bio.style.display = "block";
    infobtn.style.textDecoration = "underline";
})
workbtn.addEventListener("click", () => {
    work.style.display = "block";
    workbtn.style.textDecoration = "underline";
    bio.style.display = "none";
    infobtn.style.textDecoration = "none";
})
workbtn.addEventListener("mouseover", () => {
    workbtn.style.textDecoration = "underline"
})
infobtn.addEventListener("mouseover", () => {
    infobtn.style.textDecoration = "underline"
})
extworkbtn.addEventListener("mouseover", () => {
    extworkbtn.style.cursor = "pointer";
})