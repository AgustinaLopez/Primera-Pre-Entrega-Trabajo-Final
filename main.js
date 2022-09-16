let cantidad = 0;
let precio = 0;
let costo= 0;
let seguirCotizando = false;


const Hoteles = [
   Economico = {nombre: 'All Star Movies', price: 1500, extra: "desayuno incluido"},
   Moderado = {nombre: 'Caribbean Beach Resort', price: 2000, extra: "entrada temprana"},  
   Deluxe= {nombre: 'Contemporany Resort', price: 3500, extra: "descuento"}
];

const tickets = ["Un parque-Un día", "Dos parques-Un dia"];


let nombreIngresado= prompt ("Hola! Cotizamos tu paquete Disney! ¿Cual es tu nombre?");
let correoIngresado= prompt ("Hola "+ nombreIngresado+ "! Dejanos tu correo electronico" );



do{
    let producto= prompt ("¿Que te gustaría cotizar? Hotel+Tickets , Solo Hotel, Solo Tickets, Memory Maker, Plan de Comidas, Tour VIP", "Ej:Hotel+Tickets");
    cantidad = parseInt (prompt("¿Cuantas personas viajan?"));

 switch (producto){
    case 'Hotel+Tickets':
        //precio= 3000
        prompt ("¿Que tipo de Hotel prefieres? - Economico, Moderado o Deluxe", "Ej:Moderado")
        console.log (Hoteles.join (','));
        if ("Economico"){
          precio = 1500 ;
         }else if ("Moderado"){
          precio = 2000 ;
         }
         else {("Deluxe")
         precio = 3500};      
        prompt ("¿Que tipo de Tickets Necesitas? - Un parque-Un día, Dos parques-Un dia" , "Ej: Un parque-Un día ")
        break;
    case 'Solo Hotel':
        //precio= 2500
        prompt ("¿Que tipo de Hotel prefieres? - Economico, Moderado o Deluxe", "Ej:Moderado")
        console.log (Hoteles.join (','));
          if ("Economico"){
           precio = 1500 ;
          }else if ("Moderado"){
           precio = 2000 ;
          }
          else {("Deluxe")
           precio = 3500};
        break;
    case 'Solo Tickets':
        precio= 1000
        prompt ("¿Que tipo de Tickets Necesitas? - Un parque-Un día, Dos parques-Un dia" , "Ej: Un parque-Un día ")
        break;
    case "Memory Maker":
          costo = 200;
        break;
    case "Plan de Comidas":
          costo = 600;
        break;
    case "Tour VIP":
          costo = 1500;
        break;    
    default:
    alert ("No se ajusta a lo que buscas? Dejanos tu contacto!");
    precio=0
  }
  

 seguirCotizando= confirm("¿Quieres agregar más cosas a tu paquete?");

} while (seguirCotizando);


const promo = Hoteles.filter (hotel => hotel.extra == 'desayuno incluido');
console.log (promo)

const actualizacionTemporada = Hoteles.map (hotel => {
  return {
    nombre: hotel.nombre,
    precio: hotel.price * 1.15
  }
})
console.log (actualizacionTemporada)

console.log(precio)
console.log(cantidad)
console.log (costo)


let precioTotal = (precio * cantidad) + (costo * cantidad);
console.log(precioTotal)




alert ('El costo total del paquete es de: $ '+precioTotal);

let finalizarCotizacion= confirm("¿Desea finalizar su cotización?")



if(finalizarCotizacion) alert ("Tu cotización ha sido enviada a tu correo electronico!");
else {alert ("Consultanos tus dudas por whatsapp!")};
