document.addEventListener("DOMContentLoaded", function (){
    console.log("Page loaded - Initializing gallery");

    const images = document.querySelectorAll(".gallery img");

    function addTabFocus(event){
        event.target.classList.add("tabfocus");
    }

    function removeTabFocus(event){
        event.target.classList.remove("tabfocus");
    }

    images.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.classList.add("hovered");
            console.log("Mouse over image:", img.alt);
        });

        img.addEventListener("mouseleave", () => {
            img.classList.remove("hovered");
            console.log("Mouse left image:", img.alt);
        });

        img.addEventListener("focus", addTabFocus);
        img.addEventListener("blur", removeTabFocus);
    });
});
