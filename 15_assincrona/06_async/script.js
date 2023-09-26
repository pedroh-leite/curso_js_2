// Funções assincronas

async function somar(a, b){
  return a + b;
}

somar(10, 20).then((value) => console.log(value));