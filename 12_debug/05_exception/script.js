// Exception

function saudacao(nome){
    if(typeof nome != "string"){
        throw new Error("Parâmetro nome precisa ser string");
    } else {
        console.log(`Olá ${nome}`);
    }
}

saudacao("Pedro");
saudacao(23);
