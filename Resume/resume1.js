// let navAnchorTag = document.querySelector('.skill-desc');

// function skillbhai(){
// var intial =0;
// var Limit = navAnchorTag.getBoundingClientRect().top;
// for(let i=0;i<navAnchorTag.clientHeight;i++){
//   let interval=setInterval(function(){
//   if(intial>=Limit){
//    clearInterval(interval);
//    return;
//   }

//   window.scrollBy(0,50);
// },20);
// }
// }

// var navAnchorTag = document.querySelectorAll('.nav-menu a');
// var interval;
// // console.log(navAnchorTag);
// for(var i=0;i<navAnchorTag.length;i++){
//    navAnchorTag[i].addEventListener('click',function(event){
//        event.preventDefault();
//        var targetsectionID = this.textContent.trim().toLowerCase();
//        console.log(this.textContent);
//        var targetSection = document.getElementById(targetsectionID);
//        interval = setInterval(function(){ scrollVertically(targetSection);
//        },20);
//    });
// }
// function scrollVertically(targetSection){
//   var targetsectionCordinate = targetSection.getBoundingClientRect();
//    if(targetsectionCordinate.top<=0){
//     clearInterval(interval);
//     return;
//    }
//    window.scrollBy(0,50);
// }

// Skills bar events to run.
/*
let Allskills = document.querySelectorAll('.skill-progress>div');
let skillsContainer= document.getElementById('skills-container');
let animationDone = false;
window.addEventListener('scroll',checkScroll);
function initialiseBars(){
  for(let bar of Allskills){
    bar.style.width=0+'%';
  }
}
 initialiseBars();
// function for the fill bars
 function fillBars(){
    for(let bar of Allskills){
      let targetWidth = bar.getAttribute('data-bar-width');
      let currentWidth = 0;
      let interval = setInterval(function(){
        if(currentWidth>targetWidth){
          clearInterval(interval);
          return;
      }
      currentWidth++;
      bar.style.width=currentWidth+'%'; 
    },5);
    }
 }
// console.log(Allskills);
 function checkScroll(){
   let coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone&&coordinates.top<=window.innerHeight){
      animationDone=true;
      // console.log('chal rha he');
      fillBars();
    }else if(coordinates.top>window.innerHeight){
      animationDone = false;
      initialiseBars();
    }
 }
*/
var progressBars = document.querySelectorAll(".skill-progress > div");

function initialiseBar(bar) {
  bar.setAttribute("data-visited", false);
  bar.style.width = 0 + "%";
}

for (var bar of progressBars) {
  initialiseBar(bar);
}

function fillBar(bar) {
  var currentWidth = 0;
  var targetWidth = bar.getAttribute("data-bar-width");
  var interval = setInterval(function () {
    if (currentWidth >= targetWidth) {
      clearInterval(interval);
      return;
    }
    currentWidth++;
    bar.style.width = currentWidth + "%";
  }, 5);
}

// This function uses a for loop for individual progress bars.
function checkScroll() {
  for (let bar of progressBars) {
    var barCoordinates = bar.getBoundingClientRect();
    if (
      bar.getAttribute("data-visited") == "false" &&
      barCoordinates.top <= window.innerHeight - barCoordinates.height
    ) {
      bar.setAttribute("data-visited", true);
      fillBar(bar);
    } else if (barCoordinates.top > window.innerHeight) {
      bar.setAttribute("data-visited", false);
      initialiseBar(bar);
    }
  }
}

window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);


// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 10,
      scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
      },
  });
  var swiper = new Swiper(".swiper-container1", {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 10,
      loop:true,
      scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
      },
  });
  var swiper = new Swiper(".swiper-container2", {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 0,
      scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
      },
  });
});


//Project
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}