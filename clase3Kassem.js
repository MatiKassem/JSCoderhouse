let paisdeNacimiento = prompt("¿en que país naciste?").toLocaleUpperCase();
const comidaUniversal = "el menú de hoy es Hamburguesas con Papas Fritas";
let edad = "";

while (paisdeNacimiento != "") {

    switch (paisdeNacimiento){
        case "ARGENTINA":
            edad = prompt("Que edad tenes");
            if(edad >= 18){
                alert("el menú de hoy es Asado con Vino Tinto");
            }else{
                alert("el menú de hoy es Choripan con Coca Cola");
            }
            paisdeNacimiento="";
            break;
        case "PERU":
            edad = prompt("Que edad tenes");
            if(edad >= 18){
                alert("el menú de hoy es Ceviche y Pisco Sour");
            }else{
                alert("el menú de hoy es Lomo Saltado y Chicha Morada");
            }
            paisdeNacimiento="";
            break;
        case "PERÚ":
            edad = prompt("Que edad tenes");
            if(edad >= 18){
                alert("el menú de hoy es Ceviche y Pisco Sour");
            }else{
                alert("el menú de hoy es Lomo Saltado y Chicha Morada");
            }
            paisdeNacimiento="";
            break;
        case "URUGUAY":
            edad = prompt("Que edad tenes");
            if(edad >= 18){
                alert("el menú de hoy es Chivito Uruguayo y Cerveza");
           }else{
                alert("el menú de hoy es Chivito Uruguayo y Coca Cola");
                }
            paisdeNacimiento="";
            break;
        case "PARAGUAY":
            edad = prompt("Que edad tenes");
            if(edad >= 18){
                alert("el menú de hoy es Chipa Guazu y Caña");
            }else{
                alert("el menú de hoy es Chipa y Tereré");
            }
            paisdeNacimiento="";
            break;
        default:
            alert(comidaUniversal);
            paisdeNacimiento="";
        }
    paisdeNacimiento = prompt("¿en que país naciste?").toLocaleUpperCase();
}
