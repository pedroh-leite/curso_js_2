// Recursion

function recursionTest(n) {
    if( n - 1 < 2){
        console.log("Recursão parou");
    } else if(n % 2 != 0){
        console.log("Número impar" + n);
        recursionTest(n-1);
    } else {
        console.log("Numero par" + n);
        recursionTest(n-2);
    }
}

recursionTest(39);
recursionTest(10);
recursionTest(5);