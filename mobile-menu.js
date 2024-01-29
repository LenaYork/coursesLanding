const mobile_menu = document.querySelector(".container-header-mobile");
//document.querySelector(".close-icon").addEventListener("click", () => {
//   console.log("da");
//  mobile_menu.style.display = "none";


//})
//document.querySelector(".burger").addEventListener("click", () => {
//   console.log("da");
//   mobile_menu.style.display = "flex";


//})
document.querySelector(".close-icon").addEventListener("click", () => {
    mobile_menu.classList.remove("show")
}
);
document.querySelector(".burger").addEventListener("click", () => {
    mobile_menu.classList.add("show");
}
);


