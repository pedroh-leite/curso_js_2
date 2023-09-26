// Rejeitando promise

function verificarNumero(num) {
  let p = new Promise.resolve((resolve, reject) => {
    if (num == 2) {
      resolve(console.log(`O número é ${num}`));
    } else {
      reject(new Error("Deu trave"));
    }
  });
};

verificarNumero(2);
verificarNumero(3);
