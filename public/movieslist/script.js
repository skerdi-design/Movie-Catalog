const top_nav = document.querySelector(".top_link");
const left_text = document.querySelector(".left_text");
const svg_logo = document.querySelector(".svg_container");
const scroller_down = document.querySelector(".scroller");
const scroller_up = document.querySelector(".scroll_up");
const body = document.querySelector(".body");
const catalog = {
    x:0,
    catalog:document.querySelector(".catalog"),
    top_menu:document.querySelector(".top_menu"),
    logo:document.querySelector(".logo"),
    current_watch:document.querySelector(".current_watch"),
    left_butt:document.querySelector(".left_butt"),
    right_butt:document.querySelector(".right_butt"),
    slider:document.querySelector(".slider"),
    border:document.querySelector(".border"),
}

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
    setTimeout(() => {
        catalog.top_menu.classList.add("ready");
        catalog.top_menu.classList.remove("unready");
        catalog.logo.classList.add("ready");
    },0);
}
scroller_down.addEventListener("click",()=>{
    classRemove();
    body.style.transform = `translateY(${-window.innerHeight}px)`;
    setTimeout(() => {
        catalog.top_menu.classList.add("ready");
        catalog.top_menu.classList.remove("unready");
        catalog.logo.classList.add("ready");
    }, 2300);
});
scroller_up.addEventListener("click",()=>{
    setTimeout(() => {
        classAdd();
    }, 2500);
    body.style.transform = `translateY(0px)`;
    catalog.top_menu.classList.remove("ready");
    catalog.top_menu.classList.add("unready");
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
    trees1.style.transform = "translateY(" + x / 6 + "%)";
    trees2.style.transform = "translateY(" + x / 8 + "%)";
    trees3.style.transform = "translateY(" + x / 9 + "%)";//the final one
    trees4.style.transform = "translateY(" + x / 10 + "%)";
    trees5.style.transform = "translateY(" + x / 18 + "%)";
    trees6.style.transform = "translateY(" + x / 90 + "%)";
    svg_container.style.transform = "translateY("+ x / 3 +"%) translateX(-50%)";
    cloud.style.transform = "translateY("+x/4.8+"%)";
  }
  requestAnimationFrame(scroll);
}

const options = document.querySelectorAll(".options");
options.forEach(x=>{x.addEventListener("click",()=>{
    options.forEach(y=>{y.classList.remove("current")});
    x.classList.add("current");
})})


catalog.left_butt.addEventListener("click",()=>{
    catalog.x -= 10.9;
    catalog.current_watch.style.transform = `translateX(${catalog.x}em)`
})
catalog.right_butt.addEventListener("click",()=>{
    catalog.x += 10.9;
    catalog.current_watch.style.transform = `translateX(${catalog.x}em)`
})

requestAnimationFrame(scrolling);
let height = catalog.slider.getBoundingClientRect().height;
console.log(height)
function scrolling(){
  //x is the amount of px the window has moved verticly
  let x = catalog.catalog.scrollTop;//the translateY
  if(x<height){
    catalog.slider.style.transform = `translateY(${-x/2}px)`//if translateY is put at x px the element will not scroll
    catalog.border.style.transform = `translateY(${-x/2}px)`//similar to position fixed
  }
  requestAnimationFrame(scrolling);
}