const club = "UNO Bahía Club";

alert(`Bienvenid@ a ${club}`);

const nombre = prompt("Por favor, ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
console.log(nombre + " " + apellido);

let email = prompt("Ingrese su Email");
console.log(email);



alert(`Hola! ${nombre}, nos alegra que hayas decidido incorporarte a ${club}.
Te contamos que actualmente estamos trabajando con un sistema de créditos con el que podés pagar las clases que usas, cuando las usas; y cada actividad tiene un valor en créditos.

A continuación, te mostraremos los Packs que podrás contratar para asistir a las mismas:

PACK ENERGÍA $6.400 - 2 a 10 créditos

PACK RECARGA $12.800 - 4 a 20 créditos

PACK REFUERZO $21.760 - 8 a 40 créditos

PACK ACTITUD $30.720 - 12 a 60 créditos`);

let salir = false;
let afirmacion = "si";
let negacion = "no";

while (!salir) {
  let respuestaCorrecta = prompt(`${nombre}, deseas contratar un pack?`);

  if (afirmacion === respuestaCorrecta) {
    alert("Exelente! Continuemos...");
    break;
  } else {
    alert(":( Lo sentimos. Esperamos volver a verte pronto.");
    let salir = true;
  }
}

let pack = prompt(`Seleccioná el pack adecuado para vos: 
1: Pack Recarga
2: Pack Frecuente
3: Pack Actitud
4: Pack Inicial`);

switch (pack) {
  case "1":
    alert(
      `Excelente! Haz seleccionado el Pack Recarga. El monto a abonar es de $6.000.-`
    );
    break;
  case "2":
    alert(
      `Excelente! Haz seleccionado el Pack Frecuente. El monto a abonar es de $10.000.-`
    );
    break;
  case "3":
    alert(
      `Excelente! Haz seleccionado el Pack Actitud. El monto a abonar es de $14.000.-`
    );
    break;
  case "4":
    alert(
      `Excelente! Haz seleccionado el Pack Inicial. El monto a abonar es de $3.000.-`
    );
    break;
  default:
    alert("La opción ingresada no corresponde a un pack vigente.");
    break;
}

let mercadoPago = "1";
let efectivo = "2";
let cancelar = "0";

let pago = prompt(`${nombre}, cómo deseas abonar?
1: Mercado Pago 
2: Efectivo
0: Cancelar`);

while (pago != "0") {
  switch (pago) {
    case "1":
      alert("Perfecto! te redirigiremos a MP para efectuar el pago. Gracias!");
      break;
    case "2":
      alert(
        "Felicitaciones! Te esperamos en el club para abonar y disfrutar de las clases."
      );
      break;
    default:
      console.log("El proceso de pago ha sido cancelado");
      break;
  }

  pago = prompt(`${nombre}, cómo deseas abonar?
   1: Mercado Pago 
   2: Efectivo
   0: cancelar`);
}
