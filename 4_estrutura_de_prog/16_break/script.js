// Break Loop

let nome = "Pedro";

for(let i = 0; 1 < 10; i = i + 1) {
    if(i == 3) {
        nome = "Henrique";
    }

    if(i ==5 && nome == "Henrique") {
        console.log("O nome é Henrique, pode parar!")
        break;
    }
    console.log(i);
}