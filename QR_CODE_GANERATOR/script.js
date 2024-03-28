let btn = document.querySelector("#btn");
let qr_img = document.querySelector("#imges");
// let side_img = document.querySelector("#side-img");


btn.addEventListener("click",()=>{

    console.log("qr genrate succefully");

    let input = document.querySelector("#input").value;
    
    let api = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input} `;
    qr_img.src = api;

    // side_img.style.display = "block" 

    
});


var typed = new Typed (".text",{
    strings: ["GENERATER"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});


