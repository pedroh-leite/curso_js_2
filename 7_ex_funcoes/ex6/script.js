
function tipoDeDado(data){
    
    let typeOfData = typeof(data);

    if(typeOfData == "boolean") {
        console.log("Esse é um valor Boolean")
    } else if(typeOfData == "number") {
        console.log("Esse é um dado Number")
    } else if (typeOfData == "string"){
        console.log("Esse é um dado String")
    }

}

tipoDeDado(true);
tipoDeDado(10);
tipoDeDado("string");


