/* let numeroGanador = 5;
let numero = parseInt(prompt("Ingrese un numero del 1 al 10 para descubrir su descuento!"));
let total_pagar = 0;
let descuento = 0;


if (numero === numeroGanador) {
    alert("ACERTASTE!!! Tenes 25% de descuento en toda la tienda! ");
    descuento = 25;
} else if (numero === 4 || numero === 6) {
    alert("No es el numero ganador! pero estuviste muy cerca! Tenes 15% de descuento en la tienda! ");
    descuento = 15;
} else if (numero === 3, 2, 1 || numero === 7, 8, 9, 10) {
    alert("No es el numero ganador! Te llevas 10% de descuento por participar");
    descuento = 10;
} else {
    alert("No es un numero correcto");
    descuento = 0;
}

console.log(descuento)

let cantBordados = parseInt(prompt("Ingrese la cantidad de Bordados:"));
let precioDelBordadoGrande = 400;
let precioDelBordadoChico = 300;


for (let i = 0; i < cantBordados; i++) {
    let numeroDeBordado = 1 + i;
    let tamañoDelBordado = parseInt(prompt("Ingrese el tamaño (1: si es chico o 2: si es grande) del bordado  n°" + numeroDeBordado));
    if (tamañoDelBordado == 1) {
        alert("Agregaste un Bordado chico por $300");
        total_pagar = total_pagar + precioDelBordadoChico
        continue;
    } else if (tamañoDelBordado == 2) {
        alert("Agregaste un Bordado Grande por $400");
        total_pagar = total_pagar + precioDelBordadoGrande
        continue;
    } else {
        alert("El tamaño no es correcto");
        continue;
    }
}

descuento = (total_pagar * descuento) / 100

let mensaje_final = "El total a pagar con tu descuento es: $" + (total_pagar - descuento);
alert(mensaje_final);
console.log(mensaje_final);

class Bordado {
    constructor(nombre, tamaño, precio) {
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.precio = precio;
        this.vendido = false;
    }
    vender() {
        this.vendido = true;
    }
}
const bordados = [];

bordados.push(new Bordado("levi", "8cm", 300));
bordados.push(new Bordado("gato", "10cm", 400));
bordados.push(new Bordado("flores", "8cm", 300));
bordados.push(new Bordado("amigas", "10cm", 400));

for (const Bordado of bordados) {
    Bordado.vender();
}
console.log(bordados);

let disponible = prompt("Ingrese la tematica del bordado para verificar su disponibilidad").toLowerCase();
let resultado = bordados.some(elemento => elemento.nombre === disponible);
console.log(resultado);
if (resultado) {
    alert("Producto disponible");
} else {
    alert("Producto no disponible");
} */

const carrito = [];

let boton1 = document.getElementById("btnCarritoFlor"); 
boton1.addEventListener("click", () => {
    carrito.push("Flores") 
    console.log(carrito)
});
let boton2 = document.getElementById("btnCarritoLevi"); 
boton2.addEventListener("click", () => {
    carrito.push("Levi") 
    console.log(carrito)
});
let boton3 = document.getElementById("btnCarritoGatito"); 
boton3.addEventListener("click", () => {
    carrito.push("Gatito") 
    console.log(carrito)
});
let boton4 = document.getElementById("btnCarritoAmigas"); 
boton4.addEventListener("click", () => {
    carrito.push("Amigas") 
    console.log(carrito)
});
