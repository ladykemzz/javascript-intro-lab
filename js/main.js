console.info('Yoo, whaddup');
console.dir(document)
//document.getElementById("myHeading").innerHTML = "Kemi's Site"
document.querySelector('nav ul li').setAttribute('class', 'currentPage');
document.querySelector('nav ul li a').setAttribute('href', 'http://www.google.co.uk');
//const
const myHeading = document.getElementById("myHeading");
myHeading.innerText = "Kemi's Site";
let firstButton = document.querySelector(".btn");
console.log(firstButton); // Logs the first element with the class 'btn'
let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons); // Logs a NodeList of all elements with the class 'colPicker'

// colourButtons.forEach(button => {
//     button.style.backgroundColor = "red";
// });

document.getElementById('myTestBtn').addEventListener('click', myFunction);

function myFunction() {
  console.info('hi');
}
document.getElementById('myTestBtn').addEventListener('click', () => {
    console.info('Hello')
    console.info('World')
  });


  const redBtn = document.querySelector(".red")
redBtn.addEventListener('click', function(){
    document.body.setAttribute("class", "redBack")
})
const greenBtn = document.querySelector(".green")
greenBtn.addEventListener('click', function(){
    document.body.setAttribute("class", "greenBack")
})
const blueBtn = document.querySelector(".blue")
blueBtn.addEventListener('click', function(){
    document.body.setAttribute("class", "blueBack")
})
const resetBtn = document.querySelector(".reset")
resetBtn.addEventListener('click', function(){
    document.body.removeAttribute("class")
})