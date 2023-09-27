// Manipulando atributos

let a = document.querySelector("footer a");

console.log(a.getAttribute("href"));

let link = "https://www.udemy.com/course/javascript-do-basico-ao-avancado-com-node-e-projetos/learn/lecture/18155806#overview";

a.setAttribute("href", link);