const body = document.querySelector(".body");
const pop = document.querySelector(".pop-up");
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
// container.style.transform = `translateY(0px)`;

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
    head.style.transform = "translateY("+x/0.5+"%) translateX(-50%)";
    cloud.style.transform = "translateY("+x/4.8+"%)";
    // console.count("hi")
  }
  requestAnimationFrame(scroll);
  // const regex = /\d/g;
  // console.log(x.match(regex).join(""));
  // console.log(x.style);
  // console.count("hi")
}

// const para = "translate(100px)";
// const regex = /\d/g;
// const found = para.match(regex).join("");
// console.log(found);





const content = document.querySelector("#content")
const left = document.querySelector("#left");
const right = document.querySelector("#right");
let offset = 0;
let maxoffset = 0;
right.onclick = ()=>{
  if(offset == maxoffset){
    console.log("over")
    offsetmax();
  }else{
    offset = offset - 180;
    content.style.transform = `translateX(${offset}px)`;
  }
    // offset = offset - 180;
    // content.style.transform = `translateX(${offset}px)`;//if 6 ele want to remove 180 px
}
left.onclick = ()=>{
  if(offset == 0){
    offsetzero();
  }else{
    offset = offset + 180;
    content.style.transform = `translateX(${offset}px)`;
  }
}
function offsetzero () {
  content.style.transform = `translateX(${+130}px)`;
  setTimeout(function(){content.style.transform = `translateX(${0}px)`;},180);
}
function offsetmax (){
  content.style.transform = `translateX(${offset - 130}px)`;
  setTimeout(function(){content.style.transform = `translateX(${offset}px)`;},180);
}





let scrolling = 0;
const menu = document.querySelector(".menu");
// console.log(menu);
body.addEventListener("scroll",()=>{
  let st = body.scrollTop;
  if(st > scrolling){
    menu.style.opacity = 0;
    menu.style.pointerEvents = "none";
    // console.log("scrolling down");
  }else{
    menu.style.opacity = 1;
    menu.style.pointerEvents = "all";
    // console.log("scrolling up");
  }
  scrolling = st <= 0 ? 0 : st;//scrolling = if st is smaller or equal than 0 is 0 otherwise it is = to st
  pop.style.top = 40 + body.scrollTop+"px";
});







const add = document.querySelector(".add");
add.addEventListener("click",()=>{
  pop.classList.add("up");
})
const X = document.querySelector(".x");
X.addEventListener("click",()=>{
  pop.classList.remove("up");
  for(let i = 0;i<form.length - 1;i++){
    form[i].value = "";
  }
})





//------- the back end section -------------------------------------------------------------------------


const movies = document.querySelector(".movies")
fetch("/userinfo")
.then(doc=>{
  return doc.json()
}).then(info=>{
  console.dir(info)
  userinfo(info);
  usercatalog(info);
}).then(()=>{
  const favs = document.querySelectorAll("#favorite");
// console.log(favs.parentElement.parentElement.querySelector(".title").innerHTML)
  favs.forEach(x=>{x.addEventListener("click",()=>{

  let photo = x.parentElement.parentElement.parentElement.querySelector(".photo").attributes.src.value;
  let name = x.parentElement.parentElement.querySelector(".title").innerHTML;
  let link = x.parentElement.parentElement.querySelector(".open").attributes.href.value;
  console.log(photo,link);
  if(x.innerHTML.indexOf("far")== 10){
    let body = {
      name:name,
      photo:photo,
      link:link,
      checked:'<i class="fas fa-star"></i>'
    }
    let options = {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body:JSON.stringify(body)
    };
    fetch("/favorite",options)
    .then(res=>{
      console.log(res);
      x.innerHTML = `<i class="fas fa-star" aria-hidden="true"></i>Favorite`;
    })
  }else{
    let body = {
      name:name,
      photo:photo,
      link:link,
      unchecked:'<i class="far fa-star"></i>'
    }
    let options = {
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      body:JSON.stringify(body)
    };
    fetch("/remove-favorite",options)
    .then(res=>{
      console.log(res);
      x.innerHTML = `<i class="far fa-star" aria-hidden="true"></i>Favorite`;
    })
  }
})})
}).then(()=>{
  const options = document.querySelectorAll("#options");
  console.log(options);
  const drop = document.querySelector(".drop-down");
  //console.log(edit);
  //console.log(options.offsetParent);
  options.forEach(y=>{
  y.addEventListener("click",()=>{
    console.log(y.offsetParent.querySelector(".drop-down"));
    const menu = y.offsetParent.querySelector(".drop-down");
    menu.classList.toggle("down");
  })
})
})

function userinfo (user) {
  const name = document.querySelector(".name");
  name.innerHTML = user.username;
  if(user.favourites.length == 5){
    for(i=0;i<user.favourites.length-5;i++){
      maxoffset = maxoffset - 180;
    }
    console.log(maxoffset);
  }
}
function usercatalog(user) {
  const movies = document.querySelector(".movies");
  if(user.favourites.length == 0){
    let slide = document.createElement("div");
    slide.classList.add("ele");
    slide.innerHTML = 
    `
    <img class="img" src=""></img>
    <div class="overlay">
      <div class="name">No Movies Added</div>
    </div>
    `;
    content.appendChild(slide);
  }else{
    console.log("1 favorites")
    for(i=0;i<user.favourites.length;i++){
      let sliders = document.createElement("div");
      sliders.classList.add("ele");
      sliders.innerHTML = 
      `
      <img class="img" src="${user.favourites[i].photo}"></img>
      <div class="overlay">
        <a href="${user.favourites[i].link}" target="_blank" class="play"><i class="fas fa-play"></i></a>
        <div class="name">${user.favourites[i].name}</div>
      </div>
      `;
      content.appendChild(sliders);
    }
  }
  for(i=0;i<user.movielist.length;i++){
    let ele = document.createElement("div");
    ele.classList.add("ele");
    ele.innerHTML = 
    `
    <img class="photo" src="${user.movielist[i].img}"></img>
    <div class="rating">${user.movielist[i].rating}</div>
    <div class="type">${user.movielist[i].type}</div>
    <div class="overlay">
      <div class="options" id="options"><i class="fas fa-ellipsis-v"></i></div>
      <a href="${user.movielist[i].link}" target="_blank" class="open"><i class="fas fa-play"></i></a>
      <h3 class="title">${user.movielist[i].title}</h3>
      <div class="genre">${user.movielist[i].genre}</div>
      <div class="drop-down">
        <div class="edit" id="edit"><i class="fas fa-pencil-alt"></i>Edit</div>
        <div class="favorite" id="favorite">${user.movielist[i].added}Favorite</div>
      </div>
    </div>
    `;
    movies.appendChild(ele);
  }
}

const form = document.querySelector("form");
const msg = document.querySelector(".message");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const data = {
    title:form[form.length-8].value,
    genre:`${form[form.length-3].value}, ${form[form.length-2].value}`,
    img:form[form.length-7].value,
    rating:form[form.length-6].value,
    type:form[form.length-4].value,
    link:form[form.length-5].value,
    added:'<i class="far fa-star"></i>'
  }
  const options = {
    method:"POST",
    headers:{
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body:JSON.stringify(data)
  };
  fetch('/add',options)
  .then(res=>{
    console.log(res)
    if(res.status == 200){
      console.log("worked");
      pop.classList.remove("up");
      for(let i = 0;i<form.length - 1;i++){
        form[i].value = "";
      }
      msg.classList.remove("wrong");
    }else{
      console.log("a problem ocured!!");
      msg.classList.add("wrong");
    }
  })
  //console.log(form[form.length-2].value);
  //console.log(form[form.length-3].value);
  //console.log(form[form.length-4].value);
  //console.log(form[form.length-5].value);
  //console.log(form[form.length-6].value);
  //console.log(form[form.length-7].value);//0 to 6
  //console.log(form[form.length-8].value);
})
//console.log(form);//interesting