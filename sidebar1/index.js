const openmenu = document.querySelector(".fa-bars");
const closemenu = document.querySelector(".fa-square-xmark");
const nav_active = document.querySelectorAll(".navbar");


openmenu.addEventListener("click", ()=> {
    nav_active.forEach((elem)=> elem.classList.add("active") );
});

closemenu.addEventListener("click", ()=> {
    nav_active.forEach((elem)=> elem.classList.remove("active") );
});