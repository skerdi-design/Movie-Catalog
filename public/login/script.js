const form = document.querySelector(".form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = {
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value
    }
    const options = {
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body:JSON.stringify(data)
    };
    fetch("/login",options)
    .then(res=>{console.log(res)
        window.location.href = res.url});
})