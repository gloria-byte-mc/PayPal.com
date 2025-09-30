function function1(){
  const log = document.querySelector(".log-in");

  log.addEventListener("click", ()=>{
    window.location.href = "log-in.html";
  });
}

function function2(){
const sign = document.querySelector(".sign-up");

sign.addEventListener("click", ()=>{
  window.location.href = "#";
});

}




  document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".simplified1");
    let lastScrollY = window.scrollY; 
    window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
      
        target.style.transform = "translateY(-170px)";
      } else {
       
        target.style.transform = "translateY(0)";
      }

      target.style.transition = "2s ease-out";
      lastScrollY = currentScroll; 
    }, { passive: true });
  });



  document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".hero1");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
      
        target.style.transform = "translateY(-600px)";
      } else {
        
        target.style.transform = "translateY(0)";
      }

      target.style.transition = "2s ease-out";
      lastScrollY = currentScroll;
    },
    //it promises not to use preventDefault(), allowing smoother performance.
    { passive: true });
  });



document.addEventListener("scroll", () => {
  const overlay = document.querySelector(".overlay");

  //This will get the number of pixels the page has been scrolled vertically .
  const scrollY = window.scrollY; 

  //This is the distance in which the overlay should disappear completely in pixels.
  const fadePoint = 300;

  let opacity = 1 - scrollY / fadePoint;
  if (opacity < 0) opacity = 0; 
  overlay.style.opacity = opacity;
});



  document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector(".button");
    let lastScrollY = window.scrollY; 
    window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;

      if (currentScroll > lastScrollY) {
      
        target.style.transform = "translateY(100px)";
        target.style.opacity = "0"
      } else {
       
        target.style.transform = "translateY(0)";
        target.style.opacity = "1"
      }

      target.style.transition = "2s ease-out";
      lastScrollY = currentScroll; 
    }, { passive: true });
  });