const club = "UNO Bahía Club";
var nombre;

// class Pack {
//     constructor(nombre, creditos, precio) {
//         this.nombre = nombre;
//         this.creditos = creditos;
//         this.precio = precio;
//     }

//     toString = function() {
//         return (`${this.nombre.toUpper()} $${this.precio} ${this.creditos}`)
//     }
// }

// const pack1a = new Pack("Recarga", "4 a 20", 6000);

// const pack1 = {
//     nombre: "Pack Recarga",
//     creditos: "4 a 20",
//     precio: 6000
// }

// const pack2 = {
//     nombre: "Pack Frecuente",
//     creditos: "8 a 40",
//     precio: 10200
// }

// const pack3 = {
//     nombre: "Pack Actitud",
//     creditos: "12 a 60",
//     precio: 14400
// }

// const pack4 = {
//     nombre: "Pack Inicial",
//     creditos: "2 a 10",
//     precio: 3000
// }

class Pack {
    constructor(nombre, creditos, precio) {
        this.nombre = nombre;
        this.creditos = creditos;
        this.precio = precio;
    }
}

const pack1 = new Pack("Recarga", 20, 6000);
const pack2 = new Pack("Frecuente", 40, 10200);
const pack3 = new Pack("Actitud", 60, 14400);
const pack4 = new Pack("Inicial", 10, 3000);

function welcome() {
  alert(`Bienvenid@ a ${club}`);

  nombre = prompt("Por favor, ingrese su Nombre");
  while (!nombre) {
    alert("*Este campo es requerido");
    nombre = prompt("Por favor, ingrese su Nombre");
  }
  let apellido = prompt("Ingrese su Apellido");
  while (!apellido) {
    alert("*Este campo es requerido");
    apellido = prompt("Por favor, ingrese su Apellido");
  }
  console.log(nombre + " " + apellido);

  let email = prompt("Ingrese su Email");
  while (!email) {
    alert("*Este campo es requerido");
    email = prompt("Por favor, ingrese su Email");
  }
  console.log(email);

alert(`Hola! ${nombre}, nos alegra que hayas decidido incorporarte a ${club}.
Te contamos que actualmente estamos trabajando con un sistema de créditos con el que podés pagar las clases que usas, cuando las usas; y cada actividad tiene un valor en créditos.

A continuación, te mostraremos los Packs que podrás contratar para asistir a las mismas:

PACK INICIAL $3.000 - 0 a 10 créditos

PACK RECARGA $6.000 - 4 a 20 créditos

PACK FRECUENTE $10.200 - 8 a 40 créditos

PACK ACTITUD $14.400 - 12 a 60 créditos`);

  let respuestaCorrecta = prompt(`${nombre}, deseas contratar un pack?`);
  if (respuestaCorrecta == "si") {
    alert("Exelente! Continuemos...");
    selectPack();
  }
  else {
    alert(":( Lo sentimos. Esperamos volver a verte pronto.");
    welcome();
  }
}


function selectPack() {
  let pack = prompt(`Seleccioná el pack adecuado para vos: 
    1: Pack Recarga
    2: Pack Frecuente
    3: Pack Actitud
    4: Pack Inicial`);
  var correcto = pack == "1" || pack == "2" || pack == "3" || pack == "4";

  while (!correcto) {
    alert("La opción ingresada no corresponde a un pack vigente.");
    pack = prompt(`Seleccioná el pack adecuado para vos: 
    1: Pack Recarga
    2: Pack Frecuente
    3: Pack Actitud
    4: Pack Inicial`);
    var correcto = pack == "1" || pack == "2" || pack == "3" || pack == "4";
  }

  switch (pack) {
    case "1":
      alert(`Excelente! Haz seleccionado el ${pack1.nombre}. El monto a abonar es de ${pack1.precio}`);
      selectPayment();
      break;
    case "2":
      alert(`Excelente! Haz seleccionado el ${pack.nombre}. El monto a abonar es de ${pack2.precio}`);
      selectPayment();
      break;
    case "3":
      alert(`Excelente! Haz seleccionado el ${pack3.nombre}. El monto a abonar es de ${pack3.precio}`);
      selectPayment();
      break;
    case "4":
      alert(`Excelente! Haz seleccionado el ${pack4.nombre}. El monto a abonar es de ${pack4.precio}`);
      selectPayment();
      break;
  }
}

function selectPayment() {
  let pago = prompt(`${nombre}, cómo deseas abonar?
  1: Mercado Pago 
  2: Efectivo
  0: Cancelar`);
  var opcionCorrecta = pago == "1" || pago == "2" || pago == "0";

  while (!opcionCorrecta) {
    alert("La opción ingresada es no es válida.");
    let pago = prompt(`${nombre}, cómo deseas abonar?
  1: Mercado Pago 
  2: Efectivo
  0: Cancelar`);
    var opcionCorrecta = pago == "1" || pago == "2" || pago == "0";
  }

  switch (pago) {
    case "0":
      alert("El proceso de pago ha sido cancelado");
      console.log("El proceso de pago ha sido cancelado");
      welcome();
      break;
    case "1":
      alert("Perfecto! te redirigiremos a MP para efectuar el pago. Gracias!");
      welcome();
      break;
    case "2":
      alert("Felicitaciones! Te esperamos en el club para abonar y disfrutar de las clases.");
      welcome();
      break;
  }

}

welcome();
