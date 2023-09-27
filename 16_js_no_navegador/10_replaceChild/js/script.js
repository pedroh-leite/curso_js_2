// replaceChild

let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let heading = document.querySelector("#tituloPrincipal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);