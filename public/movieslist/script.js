// const body = document.querySelector("body");
// let parallax = document.querySelector(".parallax");
let cloud = document.querySelector(".parallax__0")
let trees0 = document.querySelector(".parallax__6");
let trees1 = document.querySelector(".parallax__5");
let trees2 = document.querySelector(".parallax__4");
let trees3 = document.querySelector(".parallax__3");
let trees4 = document.querySelector(".parallax__2");
let trees5 = document.querySelector(".parallax__1");
let head = document.querySelector(".head");

// let text = document.querySelector(".header");


// const menu = document.querySelector(".sorter");
// const footer = document.querySelector(".footer");
// // console.log(menu.getBoundingClientRect().y);
// window.addEventListener('scroll',(e)=>{
//   console.log(menu.getBoundingClientRect().y);
//   if (menu.getBoundingClientRect().y <= 0){
//     menu.style.top =menu.getBoundingClientRect().y *-1 + "px";
//     console.log("over");
//   }
// })
  // console.log(this.pageYOffset);


// requestAnimationFrame(scroll);
// function scroll (){
//   // console.log("working");
//   requestAnimationFrame(scroll);
//   let x = window.scrollY;
//   // console.log(parallax.offsetTop,parallax.offsetHeight,x);
//   if(x<=parallax.offsetTop + parallax.offsetHeight){
//     console.log("running");
//     trees0.style.transform = "translateY(" + x / 110 + "%)";
//     trees1.style.transform = "translateY(" + x / 11 + "%)";
//     trees2.style.transform = "translateY(" + x / 9.2 + "%)";      the final one
//     trees3.style.transform = "translateY(" + x / 7.8 + "%)";
//     trees4.style.transform = "translateY(" + x / 5.8 + "%)";
//     trees5.style.transform = "translateY(" + x / 4.8 + "%)";
//     cloud.style.transform = "translate(-50%," + -(x) / 30 + "%)";
//   }
// }
// requestAnimationFrame(scroll);
// function scroll() {
  // let x = body.scrollTop;
  // requestAnimationFrame(scroll);
  // console.log(trees5);
  // if (x <= parallax.offsetTop + parallax.offsetHeight) {
    // trees0.style.transform = "translateY(" + x / 110 + "%)";
    // trees1.style.transform = "translateY(" + x / 12.5 + "%)";
    // trees2.style.transform = "translateY(" + x / 10.2 + "%)";
    // trees3.style.transform = "translateY(" + x / 8.8 + "%)";
    // trees4.style.transform = "translateY(" + x / 7.8 + "%)";
    // trees5.style.transform = "translateY(" + x / 6.5 + "%)";
    // text.style.transform = "translate(-50%," + x / 5.5 + "%)";
  // }
  // console.log(x);
  // console.log(body.scrollTop);
// }
// const body = document.querySelector("body")
// body.addEventListener("scroll",(e)=>{
//   console.log(body.getBoundingClientRect());
// })


// const goDown = document.querySelector(".but");
// const goUp = document.querySelector(".goup");

// goDown.addEventListener("click",()=>{
//   // console.log(window.innerHeight);
//   body.scrollTop = window.innerHeight;
//   // document.body.scrollTop = window.innerHeight;
//   // console.log(document.body.scrollTop);
//   console.log(body.getBoundingClientRect());
// })
// goUp.addEventListener("click",()=>{
//   body.scrollTop = 0;
//   console.log(body.getBoundingClientRect());
// })
// const but = document.querySelector(".but");
// but.addEventListener("click", () => {
//   console.log(window.scrollY);
//   // window.scrollTo(0, window.innerHeight);
//   body.style.transform = `translateY(${-window.innerHeight}px)`;
// });
// const goup = document.querySelector(".goup");
// goup.addEventListener("click", () => {
//   console.log(window.scrollY);
//   // window.scrollTo(0, 0);
//   body.style.transform = `translateY(${0}px)`;
// });
// window.addEventListener("wheel",(e)=>{
//   console.log(e);
// })


//1 how much has the page gone down
// console.log(window.pageYOffset);
//from 0% to 500%
// window.addEventListener("scroll",(e)=>{
//   console.log(e);
// })
const container = document.querySelector(".container");
const debug = document.querySelector(".debug");
debug.addEventListener("click", () => {
  container.style.transform = `translateY(-${window.innerHeight}px)`;
});
const debuger = document.querySelector(".debuger");
debuger.addEventListener("click", () => {
  container.style.transform = `translateY(0px)`;
});

requestAnimationFrame(scroll);
function scroll(){
  //x is the amount of px the window has moved verticly
  let x = -(container.getBoundingClientRect().top);//the translateY
  // console.log(x)0 - 668
  if(x<window.innerHeight){
    trees0.style.transform = "translateY(" + x / 110 + "%)";
    trees1.style.transform = "translateY(" + x / 11 + "%)";
    trees2.style.transform = "translateY(" + x / 9.2 + "%)";      //the final one
    trees3.style.transform = "translateY(" + x / 7.8 + "%)";
    trees4.style.transform = "translateY(" + x / 5.8 + "%)";
    trees5.style.transform = "translateY(" + x / 4.8 + "%)";
    head.style.transform = "translateY("+x/0.7+"%) translateX(-50%)";
    cloud.style.transform = "translateY("+x/0.7+"%)";
    // console.count("hi")
  }
  requestAnimationFrame(scroll);
  // const regex = /\d/g;
  // console.log(x.match(regex).join(""));
  // console.log(x.style);
  // console.count("hi")
}

const para = "translate(100px)";
const regex = /\d/g;
const found = para.match(regex).join("");

// console.log(found);