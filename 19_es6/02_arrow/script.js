// Arrow Function
const sum = (a, b) => a + b;
console.log(sum(5, 5));

const greet = (nome) => {
  if (nome) {
    return `Olá ${nome}`;
  } else {
    return `Olá`;
  }
};
console.log(greet("Pedro"));

const test = () => console.log("Testando");
test();

///////////////////////////////////////////////////
const user = {
  name: "Pedro",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log("Username: " + this.name);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
        console.log(this);
      console.log("Username: " + this.name);
    }, 700);
  },
};

user.sayUserName();