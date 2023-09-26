// Generators

function* criadorId() {
  let id = 0;
  while(true){
    yield id++;
  }
}

let criaID = criadorId();

console.log(criaID.next().value);