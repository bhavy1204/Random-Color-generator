let btn = document.querySelector("button");
let body = document.querySelector("body");
let div = document.querySelector("div");
let h3 = document.querySelector("h3");

btn.addEventListener("click", function () {

    // Random main color
    let color = getrandomnum();
    h3.innerText = color;
    h3.style.color = color;
    div.style.backgroundColor = color;

    // Add color to history bar
    let history = document.querySelector("#history");
    let swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = color;
    history.appendChild(swatch);

    // Opposite color for body
    let color2 = bgcolor();
    body.style.backgroundColor = color2;

    // Button text change
    btn.innerText = changebtn();

    // Animate the main color div on each click
    div.classList.add("color-animate");
    setTimeout(() => {
        div.classList.remove("color-animate");
    }, 400);
});

// Generate random RGB
function getrandomnum() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `RGB(${red}, ${green}, ${blue})`;
}

// Generate inverted RGB
function bgcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `RGB(${255 - red}, ${255 - green}, ${255 - blue})`;
}

// Change button text
function changebtn() {
    return "change again";
}
