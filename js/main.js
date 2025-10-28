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