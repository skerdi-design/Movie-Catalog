
console.log("hi...");
const form = document.querySelector(".register");
// const inputData = form.querySelectorAll(".row");
const value = [];
// console.log(inputData,value);
// console.log(form,inputData);
// form.addEventListener("submit",(e)=>{
    // e.preventDefault();
    // console.log("submited");
    // inputData.forEach(ele=>{
    //     value.push(ele.querySelector("input").value);
    // });
    // const data = {
    //     username:value[0],
    //     email:value[1],
    //     password:value[2]
    // }
    // console.log(data)
    // fetch("/register",{method:'POST',headers: {'Content-Type': 'application/json',},body:JSON.stringify(data)});
// });
form.addEventListener("submit",(e)=>{
    const data = {
        username:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value
    }
    console.log(data.username,data.email,data.password);
    e.preventDefault();
    console.log("submited");
    const head = {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body:JSON.stringify(data)
    }
    fetch('/register',head)
    .then(res=>{window.location.href = res.url});
})