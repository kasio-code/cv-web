
var openLi = function(e) {
    var span = e.target;
    var li = span.parentNode;
    li.classList.toggle("open") //Agregamos la clase open (o la quitamos) al elemento que nos interesa
}

/**
 * Nos aseguramos de que el documento haya acabado de cargar antes de usarlo
 */
document.addEventListener('DOMContentLoaded', function(){ 
    var liArray = document.querySelectorAll('.pretty-list li>span'); //me quedo con todos los elementos span hijos de li
    liArray.forEach(function(span) {
        span.addEventListener('click', openLi); //JS se encarga de invocar openLi(event)
    });

}, false);