/*создаю класс, который потом многократно могу использовать  
 в нем метод getData, который будет обращаться к серверу. fetch- это функция. отдельное API которое, есть у браузера 


В ответ на эту запись в консоли я получила Promise. Дальше меняю код, и делаю функцию асинхронной.Чтоб заставить
дождаться ответа fetch 

Когда я написала await следующая строчка кода выполняться не будет, до тех пор. пока функция fetch не вернет ответ и не запишет
результат в res
 const DBservice = class {
     getData = (url) => {
        const res = fetch(url)
        console.log(res);
     }
     getTestData = () => {
         return this.getData("test.json")
     }
 }
 
    console.log(new DBservice().getTestData());*/

   
    const DBservice = class {
        getData = async (url) => {
           const res = await fetch(url);
           if(res.ok){
            return res.json();
           } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`)
        }
           
        } 
               

        getTestData = async () => {
            return await this.getData("test.json")
        }
    }
    
       new DBservice().getTestData().then();


//меню

const leftMenu = document.querySelector(".left-menu"),
      hamburger = document.querySelector(".hamburger"),
      tvShowsList = document.querySelector(".tv-shows__list"),
      modal = document.querySelector(".modal");

//открытие-закрытие меню


hamburger.addEventListener("click", () => {
    leftMenu.classList.toggle("openMenu");
    hamburger.classList.toggle("open");
});
//я хочу, чтоб меню закрывалось не только на крестик, но и когда я кликну в любой части сайта
//для этого создаю условие, чтоб при клике вне меню срабатывал метод closest и искал класс открытия меню
// но я ставлю ! знак отрицания, чтоб не срабатывало условие и у меня получилось закрыть по клику вне меню
document.body.addEventListener("click", event =>{
    const target = event.target;
    if (!target.closest(".left-menu")) {  //клик вне меню !-означает отрицание. Т.е. true меняет на false
    leftMenu.classList.remove("openMenu"); //использую метод remove чтоб удалялся класс.если поставить toggle
    hamburger.classList.remove("open");     // то на сайте бесконечно открывается и закрывается меню
 }
});
  
leftMenu.addEventListener("click", event => {
    const target = event.target;
    const dropdown = target.closest(".dropdown");//cохраняю в переменную метод closest для dropdоwn меню, чтоб себя обезопасить 
                                                 // и дропМеню откравалось даже если пользователь кликнет не только на название
                                                 // пункта, но и  на иконку или  стрелочку  
    if (dropdown) {  // если будет класс dropdown, то выполнять следующие условия 
        dropdown.classList.toggle(("active"));// классы все заранее прописываю в html
        leftMenu.classList.add("openMenu");
        hamburger.classList.add("open");
    }
});
//открытие модальное окно

 tvShowsList.addEventListener("click", event => {
     event.preventDefault();

     const target = event.target;
     const card = target.closest(".tv-card")
      
     if(card){
         document.body.style.overflow = "hidden";
         modal.classList.remove( "hide");
     }
     
     
 });
 //закрытие модальное окно

 modal.addEventListener("click", event => {

     if(event.target.closest(".cross") || // ||- или
        event.target.classList.contains("modal")) {  
        document.body.style.overflow = "";
        modal.classList.add("hide");
     }
 });

 // при наведении мыши на карточку с фильмом меняется картинка
 // использую метод деструктуризации. Когда не используем третью переменную, а идет замена переменных в одном массиве

 const changeImage = event => {
    const card = event.target.closest('.tv-shows__item');

    if(card) {
        const img = card.querySelector('.tv-card__img');
        if(img.dataset.backdrop) {
            [img.src, img.dataset.backdrop] = [img.dataset.backdrop, img.src];
        }
    }
};

tvShowsList.addEventListener('mouseover', changeImage);
tvShowsList.addEventListener('mouseout', changeImage);


//классы 
