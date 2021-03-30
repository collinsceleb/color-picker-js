const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "rgb(255, 0, 255)", "#800080", "#00FF00"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener ("click", () => {
    // Geta random number between 0 - 3
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * colors.length);
    return randomNumber;
}
