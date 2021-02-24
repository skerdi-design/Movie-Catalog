const top_nav = document.querySelector(".top_link");
const left_text = document.querySelector(".left_text");
const svg_logo = document.querySelector(".svg_container");
const scroller_down = document.querySelector(".scroller");
const scroller_up = document.querySelector(".scroll_up");
const body = document.querySelector(".body");

function classReady(){
    setTimeout(() => {
        top_nav.classList.add("ready");
        left_text.classList.add("ready");
        scroller_down.classList.add("ready");
    }, 2500);
    svg_logo.classList.add("ready");
}
function classRemove() {
    top_nav.classList.remove("ready");
    top_nav.classList.add("unready");
    left_text.classList.remove("ready");
    left_text.classList.add("unready");
    scroller_down.classList.remove("ready");
    scroller_down.classList.add("unready");
}
function classAdd() {
    top_nav.classList.add("ready");
    top_nav.classList.remove("unready");
    left_text.classList.add("ready");
    left_text.classList.remove("unready");
    scroller_down.classList.add("ready");
    scroller_down.classList.remove("unready");
}


window.onload = ()=>{
    classReady();
}
scroller_down.addEventListener("click",()=>{
    classRemove();
    body.style.transform = `translateY(${-window.innerHeight}px)`;
});
scroller_up.addEventListener("click",()=>{
    setTimeout(() => {
        classAdd();
    }, 2500);
    body.style.transform = `translateY(0px)`;
});



let cloud = document.querySelector(".parallax_0");
let trees1 = document.querySelector(".parallax_1")
let trees2 = document.querySelector(".parallax_2");
let trees3 = document.querySelector(".parallax_3");
let trees4 = document.querySelector(".parallax_4");
let trees5 = document.querySelector(".parallax_5");
let trees6 = document.querySelector(".parallax_6");
let svg_container = document.querySelector(".svg_container");

requestAnimationFrame(scroll);
function scroll(){
  //x is the amount of px the window has moved verticly
  let x = -(body.getBoundingClientRect().top);//the translateY
  if(x<window.innerHeight){
    trees1.style.transform = "translateY(" + x / 6 + "%)";//mountain
    trees2.style.transform = "translateY(" + x / 8 + "%)";//darker mountains
    trees3.style.transform = "translateY(" + x / 9 + "%)";//first trees      //the final one
    trees4.style.transform = "translateY(" + x / 10 + "%)";
    trees5.style.transform = "translateY(" + x / 18 + "%)";
    trees6.style.transform = "translateY(" + x / 90 + "%)";
    svg_container.style.transform = "translateY("+ x / 3 +"%) translateX(-50%)";
    cloud.style.transform = "translateY("+x/4.8+"%)";
    // console.count("hi")
  }
  requestAnimationFrame(scroll);
  // const regex = /\d/g;
  // console.log(x.match(regex).join(""));
  // console.log(x.style);
  // console.count("hi")
}