// Exercício 6

let arrMaior = [0,1,2,3,4,5,6];
let arrMenor = [0,1,2,3];

function conferirArray(arr){
    if(arr.length > 5){
        console.log("Muitos elementos")
    } else {
        console.log("Poucos elementos");
    }
}

conferirArray(arrMaior);
conferirArray(arrMenor);