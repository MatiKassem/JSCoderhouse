alert("Bienvenido a la plataforma de pago de Realtec el sitio numero en ventas de equipos informaticos");

let numeroUsuario = prompt("Por favor ingrese su número de usuario");
let producto = prompt("Por favor ingrese cual de los siguientes productos desea adquirir: MONITOR, MOUSE, TECLADO, PARLANTES")
let medioDePago = prompt("Seleccióne cual de los siguientes es su medio de pago: EFECTIVO, TARJETA")

let netoMonitor = 500;
let netoMouse = 200;
let netoTeclado = 300;
let netoParlante = 400;
let descuento = 0;

if(medioDePago == "EFECTIVO" && numeroUsuario <= 10){
    descuento = descuento + 100;
}else if(medioDePago == "TARJETA" && numeroUsuario <= 10){
    descuento = descuento + 50;
}else{
    descuento = descuento;
}

let valorFinal = (neto,iva,descuento) => neto/0.8 + iva - descuento;
const iva = neto => neto * 0.21;

while (producto != ""){
switch (producto.toLocaleUpperCase()){
    case "MONITOR":
        alert("El valor final de su producto es " + valorFinal(netoMonitor,iva(netoMonitor),descuento));
        producto = "";
        break;
    case "MOUSE":
        alert("El valor final de su producto es " + valorFinal(netoMouse,iva(netoMouse),descuento));
        producto = "";
        break;
    case "TECLADO":
        alert("El valor final de su producto es " + valorFinal(netoTeclado,iva(netoTeclado),descuento));
        producto = "";
        break;
    case "PARLANTES":
        alert("El valor final de su producto es " + valorFinal(netoParlante,iva(netoParlante),descuento));
        producto = "";
        break;
    default:
        alert("Seleccione un producto válido");
        producto = prompt("Por favor ingrese cual de los siguientes productos desea adquirir: MONITOR, MOUSE, TECLADO, PARLANTES");
}
}