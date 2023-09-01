
function imprimirPares(num){
    for(let n = num; n > 0; n--){
        if(n % 2 == 0){
            console.log(n);
        }
    }
}

imprimirPares(50);