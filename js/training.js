/* ------------------------------------ */
/* --- Exercice 1 --- */
/* <button type="button" class="button">Click me</button> */
let btn1 = document.querySelector("#ex1 .button");
// console.log(btn1);
function hideP(event) {
    let p = document.querySelector("#ex1 .text");
    p.classList.toggle("hidden");
}
btn1.addEventListener('click', hideP);



/* ------------------------------------ */
/* --- Exercice 2 --- */
// .addEventListener('scroll',function)

const scroll = document.getElementById("ex2-scroll-value");
window.addEventListener("scroll", function (event) {
    scroll.textContent = Math.round(window.scrollY);
})






/* ------------------------------------ */
/* --- Exercice 3 --- */

let cta = document.querySelector("#ex3 .button");
console.log(cta);
let animals = document.getElementById("ex3-animals");
console.log(animals);
cta.addEventListener('click', function () {
    animals.appendChild(animals.firstElementChild)
})


/* ------------------------------------ */
/* --- Exercice 4 --- */


/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
