let navbar = document.getElementsByClassName("navbar")[0];
let info_box = document.getElementsByClassName("info-box")[0];

navbar.addEventListener("click", (event) => {
    if (event.target instanceof HTMLButtonElement) {
        console.log(event.target.id);
    }
    info_box.src = "html/" + event.target.id.toLowerCase() + ".html";
});