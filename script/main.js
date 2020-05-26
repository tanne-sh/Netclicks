//меню
const leftMenu = document.querySelector(".left-menu");
const hamburger = document.querySelector(".hamburger");
const tvShowsList = document.querySelector(".tv-shows__list");
modal = document.querySelector(".modal");

//открытие-закрытие меню

hamburger.addEventListener("click", () =>{
leftMenu.classList.toggle("openMenu");
    hamburger.classList.toggle("open");
});

document.body.addEventListener("click", event =>{
 if (!event.target.closest(".left-menu")) {  //клик вне меню
 leftMenu.classList.remove("openMenu");
 hamburger.classList.remove("open");
 }
});

leftMenu.addEventListener("click", event => {
    const target = event.target;
    const dropdown = target.closest(".dropdown");
    // 100% выбор dropdown
    if (dropdown) {
        dropdown.classList.toggle(("active"));
        leftMenu.classList.add("openMenu");
        hamburger.classList.add("open");
    }
});
//открытие модальное окно

 tvShowsList.addEventListener("click", event => {
     const target = event.target;
     const card = target.closest(".tv-card")
      
     if(card){
         document.body.style.overflow = "hidden";
         modal.classList.remove( "hide");
     }
     
     
 });
 //закрытие модальное окно

 modal.addEventListener("click", event => {

     if(event.target.closest(".cross") ||
        event.target.classList.contains("modal")) {
document.body.style.overflow = "";
modal.classList.add("hide");
     }
 });

 