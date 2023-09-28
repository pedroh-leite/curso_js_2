// Evento de Load

// window.addEventListener("load", function(e){
//     this.alert("Assine os nossos termos de uso");
// });

window.addEventListener("beforeunload", function(e){
    event.returnValue = null;
});