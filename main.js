console.log("bienvenida");
alert("Bienvenidos a tienda Safiro!!")

/* cambio en logo */
function cambiar(){
    document.getElementById("logo").innerHTML = "<3";
}
document.getElementById("logo").onclick = function(){
    cambiar();
}


/* alert para el id envio */
let elemento = document.getElementById("envio");
elemento.addEventListener("click", function(){
    alert("Gracias por tu consulta. Te estaremos respondiendo lo mas pronto posible ;)");
});
