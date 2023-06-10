//Buenas profe,te esbribo por aca para informarle que el codido esta escrito pero no funciona bien,y no entenderia el por que.
//Basicamente no me estaria tomando la funcion que realizo(o no se estaria imprimiendo en la consola), y tampoco me muestra el resumen de la compra(a pesar de usar console.log).Yo sospecharia que el error se encuentra en el switch cuando coloco los case.
//Lo unico que si funciona correctamente es el codigo que se escribio para el boton de borrar.
//Espero sus correcciones,saludos!


//  Elementos 
//Declaro como variables
const formulario = document.querySelector("form");
const cantidadTicketsInput = document.getElementById("cantidadTickets");
const categoriaSelect = document.getElementById("categoriaSelect");
const totalPagoSpan = document.getElementById("totalpago");

// Total a pagar
function calcularTotal() {  // Realizas la funcion
    const cantidadTickets = parseInt(cantidadTicketsInput.value); //Declaro como variable.ParseInt para convertir una cadena en un entero
    const categoria = parseInt(categoriaSelect.value);
    let descuento = 0; //Declaro variable que no es constante

    switch (categoria) { //Determinas el descueto.Se utiliza switch para tomar una decision basada en los 3 casos
        case Estudiante: //80% de descuento
            descuento = 0.8;
            break; //para salir de manera abrupta del bucle
        case Trainee: //50% de descuento
            descuento = 0.5;
            break;
        case Junior: //15% de descuento
            descuento = 0.15;
            break;
    }

    const totalPagar = cantidadTickets*200*(1 - descuento); //Total a pagar.La cantidad de tickets por su valor con el descuento agregado.
    totalPagoSpan.textContent = totalPagar; //Para que aparezca el valor en el navegador
}

//Cantidad de tickets
formulario.addEventListener("change", calcularTotal); //Para que el navegador este atento a la interacción del usuario.

//Resumen
btnResumen.addEventListener("click", function (event) { //Para que el navegador este atento a la interacción del usuario.
    //Declaro como variables
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const cantidadTickets = parseInt(cantidadTicketsInput.value); //ParseInt para convertir una cadena en un entero
    const categoria = categoriaSelect.options[categoriaSelect.selectIndex].text; //Devuelve un texto que especifica el elemento de la lista actualmente seleccionada.
    const totalPagar = totalPagoSpan.textContent;

    // imprimir información en la consola del navegador.
    console.log("Resumen de la compra:");
    console.log("Nombre:",nombre);
    console.log("Apellido:",apellido);
    console.log("Email:",email);
    console.log("Cantidad de tickets:",cantidadTickets);
    console.log("Categoria:",categoria);
    console.log("Total a pagar:",totalPagar);
})

//Borrar campos
const btnBorrar = document.getElementById("btnBorrar") //Declaro como variables
btnBorrar.addEventListener("click", function (event) { //Para que el navegador este atento a la interacción del usuario.
    event.preventDefault(); // Para cancelar el evento
    formulario.reset();
    totalPagoSpan.textContent = "";
});

