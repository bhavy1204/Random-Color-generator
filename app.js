let btn = document.querySelector("button");
let body = document.querySelector("body");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let color = getrandomnum();
    h3.innerText= color;
    console.log("h3 updated");
    let div = document.querySelector("div");
    div.style.backgroundColor = color;
    h3.style.color = color;
    let color2 = bgcolor();
    body.style.backgroundColor=color2;
    let changetext = changebtn();
    btn.innerText=changetext;

});

function getrandomnum(){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random() * 255);
    let value = `RGB(${red} , ${green} , ${blue})`;
    let bg = 255-red;
    let bg1 = 255-green;
    let bg2 = 255-blue;
    
    return value;
}
function bgcolor() {
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random()* 255);
    let blue = Math.floor(Math.random() * 255);
    let bg = 255-red;
    let bg1 = 255-green;
    let bg2 = 255-blue;
    let value2 = `RGB(${bg} , ${bg1} , ${bg2})`;
    return value2;
}
function changebtn() {
    let value3= "change again";
    return value3;
}
    