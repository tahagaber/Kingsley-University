// SECTION - Global Variables
const navLis = document.querySelectorAll(".navbar-links .main-li");
const loginSecInps = document.querySelectorAll("section#login input");
const placeholders = document.querySelectorAll(".input-field h5");
const page = document.body.getAttribute('data-page');
const mainSection = document.querySelectorAll("section");
const statSec = document.querySelector("#states");
const sloganSec = document.getElementById("slogan");
const stats = document.querySelectorAll("#states .state-card span span");
const loveProj = document.querySelectorAll("#Projects .proj-card #heart");
const items = document.querySelectorAll(".photo");
const myImgs = Array.from(document.querySelectorAll(".photo img"));
const lightBoxContainer = document.querySelector("#lightBoxContainer");
const lightBox = document.querySelector("#lightBox");
const closeBtn = document.querySelector("#closeBtn");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let started = false;
let fill = false;
let currIndex = 0;
const delay = 75;


// SECTION - Functions Call
addActiveClass(navLis);
mainTitleAnimation();




//! Executed In Home Page  
if (page === "home") {
  
  const slogan = "Where Excellence Meets Tradition";


  // SECTION - On Load
  document.addEventListener('DOMContentLoaded', () => {
      const splashScreen = document.getElementById('splash-screen');
      setTimeout(() => {
          splashScreen.style.opacity = '0';
          setTimeout(() => {
              splashScreen.style.display = 'none';
          }, 1000); 
      }, 4500); 
  });


    // SECTION - On Scroll Animations
    window.addEventListener("scroll", () => {
      if (window.scrollY >= statSec.offsetTop - 300) {
        if (!started) {
            stats.forEach((stat) => startCount(stat));
        }
        started = true;
    }
    if (window.scrollY >= sloganSec.offsetTop - 200) {
        if (!fill) {
            addTextCharacterByCharacter(slogan, delay)
        }
        fill = true;
    }
    })
    

  // SECTION - Stats
  function startCount(el) {
      let goal = el.dataset.goal;
      let count = setInterval(() => {
          el.textContent++;
          if (el.textContent === goal) {
              clearInterval(count)
          }
      }, 1600 / goal);
  }


  // SECTION - Filling Quote Func 
  function addTextCharacterByCharacter(text, delay) {
      let sloganSpan = document.querySelector(".slogan-holder h2 span");
      let index = 0;
      function typeCharacter() {
          if (index < text.length) {
              sloganSpan.textContent += text.charAt(index);
              index++;
              setTimeout(typeCharacter, delay);
          }
      }
      typeCharacter();
  }



}

//! Executed In Students Life Page
if (page === "students-life") {


  // SECTION - Gallery Slider
  // *Start Show Image Event.
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function (eventInfo) {
    var currImgSrc = eventInfo.target.getAttribute("src");
    currIndex = myImgs.indexOf(eventInfo.target);
    lightBox.style.backgroundImage = `url(${currImgSrc})`;
    lightBoxContainer.classList.replace("hidden", "flex");
  });
}
// *End Show Image Event.


function closeWind() {
  lightBoxContainer.classList.add("flex", "hidden");
}
function prevSlide() {
  currIndex--;
  if (currIndex <= 0) {
     currIndex = 0; //NOTE - method 1
    currIndex = 0;
  }
  nextBtn.classList.remove("hidden");
  var prevImgSrc = myImgs[currIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(${prevImgSrc})`;
}
function nextSlide() {
  currIndex++;
  if (currIndex >= myImgs.length - 1) {
     currIndex = 0;   //NOTE - method 1
    currIndex = myImgs.length - 1;
  }
  prevBtn.classList.remove("hidden");
  var nextImgSrc = myImgs[currIndex].getAttribute("src");
  lightBox.style.backgroundImage = `url(${nextImgSrc})`;
}

document.addEventListener("keyup", function (eventInfo) {
  if (lightBoxContainer.classList.contains("flex")) {
    switch (eventInfo.key) {
      case "ArrowLeft":
        prevSlide();
        break;
      case "ArrowRight":
        nextSlide();
        break;
      case "Escape":
        closeWind();
        break;
    }
  }
});

document.addEventListener("click", function (inf) {  
  if (!lightBoxContainer.classList.contains("hidden")) {
    if ((inf.target === lightBoxContainer) & (inf.target !== lightBox)) {
      closeWind();
    }
  }
});

closeBtn.addEventListener("click", closeWind);
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);


// SECTION - Testimonials Swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


 // SECTION - Change The Heart Color
 loveProj.forEach((el) => {
  el.addEventListener("click", () => {
      el.style.color = "var(--button-bg-color)"
  }) 
})


}

//! Executed In Admission Page  
if (page === "admission") {
  
// *SECTION -  Controlling Animation
let firstP = document.querySelector("#how p");
let secondP = document.querySelector("#apply p");
let steps = document.querySelectorAll("#how .step");
let mainSection = document.querySelector("#how");
let lastSection = document.querySelector("#apply");
window.addEventListener("scroll", () =>{
  // console.log(window.scrollY);
  reveal(mainSection, firstP, 400);
  reveal(lastSection, secondP, 700);
})

function reveal(section, el , index ){
  if(window.scrollY >= section.offsetTop -index){
    if(el){
      // console.log("true");
      el.style.height = "100px";
    }
  }
}

// Controlling Steps
window.addEventListener("scroll", () =>{
  steps.forEach(step =>{
    if (window.scrollY >= step.offsetTop - 350){
      if(step){
        if(step.classList.contains("left")){
          step.classList.add("go-left");
          document.querySelector("#how .pic img").classList.add("go-left");
        } else{
          step.classList.add("go-right");
          document.querySelector("#how .pic img").classList.add("go-right");
        }
      }
    }
  })
})
}

//! Executed In Admission Page  
if (page === "about") {
  
// *SECTION - animating line
let mainSection = document.querySelector("#main-section");

window.addEventListener("load", () => {
  // Set the height of the ::before pseudo-element dynamically
  mainSection.style.setProperty("--before-height", "89.5%");
});

// *SECTION - Animating Sections
let Sections = document.querySelectorAll("section");
let currentSection;

window.addEventListener("scroll", () => {
  // console.log("scrollY->" + window.scrollY);
  Sections.forEach((section) => {
    if (window.scrollY >= (section.offsetTop - section.clientHeight)) {
      // document.querySelector(`#${section.id} .pic img`).classList.add("fade-up");
      // document.querySelector(`#${section.id} .pic img`).classList.add("fade-right");
      let sectionImg= document.querySelector(`#${section.id} .pic img`);
      let sectionH2= document.querySelector(`#${section.id} .info h2`);
      let sectionP= document.querySelector(`#${section.id} .info .text`);
      if( sectionH2 || sectionP){
        addAnimation(sectionH2, "fade-up");
        addAnimation(sectionP, "fade-up");
        if(sectionImg){
          console.log(sectionImg.dataset.dir);
          if(sectionImg.dataset.dir =="left"){
            addAnimation(sectionImg, "fade-left");
          } else{
            addAnimation(sectionImg, "fade-right");
          }
        }
      }
    }
  });
});

function addAnimation(el,className){
  el.classList.add(className);
}
}

//! Executed In Admission Page  
if (page === "stuff") {
  
const text = ["Learn More About Our Faculty", "Explore Departments & Expertise", "Leaders in Education", "Shaping Future Generations"];
let index = 0;
let charIndex = 0;
const typingSpeed = 110; 
const erasingSpeed = 95; 
const delayBetweenTexts = 2000; 
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

function type(){
  if (charIndex < text[index].length){
    typedText.textContent += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else{
    setTimeout(erase, erasingSpeed);
  }
}

function erase(){
  if (charIndex > 0){
    typedText.textContent = text[index].substring(0,charIndex -1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else{
    index = (index +1 ) % text.length;
    setTimeout(type, typingSpeed)
  }
}

document.addEventListener("DOMContentLoaded", () =>{
  setTimeout(type, delayBetweenTexts)
})
}

//! Executed In login Page 
if (page === "login") {
  function moveToTop(inp, plcHold) {
    inp.addEventListener("focus", () => {
      plcHold.classList.add("focus");
    })
  }

  function moveToBottom(inp, plcHold) {
    inp.addEventListener("blur", () => {
      if (!inp.value) {
        plcHold.classList.remove("focus");
      }
    })
  }
  
    moveToBottom(loginSecInps[0], placeholders[0])
    moveToBottom(loginSecInps[1], placeholders[1])
    moveToTop(loginSecInps[0], placeholders[0])
    moveToTop(loginSecInps[1], placeholders[1])

    let hidePassBtn = document.getElementById("eyebtn");
    let showPassBtn = document.getElementById("eyeSplashBtn");
    let passInp = document.querySelector(".input-field #pass");

    hidePassBtn.addEventListener("click", (e) => {
      e.preventDefault()
      if (passInp.type === "password") {
        passInp.type = "text";
        hidePassBtn.classList.add("hidden");
        showPassBtn.classList.remove("hidden")
      }
    })
    showPassBtn.addEventListener("click", (e) => {
      e.preventDefault()
      if (passInp.type === "text") {
        passInp.type = "password";
        showPassBtn.classList.add("hidden");
        hidePassBtn.classList.remove("hidden");
      }
    })
   
}

//! Executed In Contact Page 
if (page === "contact") {

  // *SECTION - Form Validation
let submit  = document.querySelector("#contact-submit");
let fName = document.querySelector("#fname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let errorMsg = document.querySelector("#error");

submit.addEventListener("click", (ev) =>{
   ev.preventDefault();
   fNameVal = fName.value.trim();
   emailVal = email.value.trim();
   phoneVal = phone.value.trim();

   // Checking fName
   if(fNameVal.length <3 ){
      errorMsg.textContent="First Name Must Be 3 Characters At Least.";
      errorMsg.classList.add("contact-message-visible")
      return;
   }

   
   // Checking Email
   if(!isEmailValid(emailVal)){
      errorMsg.textContent = "Please Enter A Valid E-mail."
      errorMsg.classList.add("contact-message-visible")
      return;
   }
   
   // Checking Phone
   if(!isValidPhone(phoneVal)){
      errorMsg.textContent="Please Enter A valid Phone.";
      errorMsg.classList.add("contact-message-visible")
      return;
   }
   
   
   errorMsg.textContent="You're Ready To Go!";
   errorMsg.classList.add("contact-message-done")
   setTimeout(() =>{
      errorMsg.textContent="";
      errorMsg.classList.remove("contact-message-done", "contact-message-visible");
   }, 3000)
})


function isEmailValid (email){
   const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return regexEmail.test(email);
}
function isValidPhone (phone){
   const regexPhone = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;
   return regexPhone.test(phone);
}

}


// SECTION - Add & Remove Active Class.
function addActiveClass(nodeList) {
  nodeList.forEach((a) => {
      a.addEventListener("click", (e) => {
          nodeList.forEach((a) => {
              a.classList.remove("active")
          })    
          a.classList.add("active"); 
      })    
  })    
}    


  // SECTION - Main Title On Scroll
  function mainTitleAnimation() {

    window.addEventListener("scroll", () => {
      const mainTitles = document.querySelectorAll("section .sec-title");
      for (let i = 0; i < mainTitles.length; i++) {
        if (this.scrollY > (mainTitles[i].offsetTop + mainTitles[i].offsetHeight) || this.scrollY < mainTitles[i].offsetTop - 200) {
          mainTitles[i].classList.remove("active");
      } else {
          mainTitles[i].classList.add("active");
      }  
      }
    })  
  }
  

