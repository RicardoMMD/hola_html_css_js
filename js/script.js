// Clases -----------------------------------------------------------------
class items_tec{
  // Clase para cada ítem del tarjetero de la pagina index 
  constructor(titulo, url_destino, data_categories, img_url, icon_url){
    this.titulo = titulo;
    this.url_destino = url_destino;
    this.data_categories = data_categories;
    this.img_url = img_url;
    this.icon_url = icon_url;
  }
}

function filterCards(selectedCategories) {
    // Enlistamos los elementos de clase "card"
    const cards = document.querySelectorAll(".card");
    // recorremos cada tarjeta
    for (let card of cards) {
        // tomamos las categorias de la tarjeta 
        let cardCategories = JSON.parse(card.dataset.categories);
        console.log(cardCategories);

        // comprobar si las categorías seleccionadas se superponen con las categorías de la tarjeta
        let overlap = selectedCategories.some(selectedCategory => cardCategories.includes(selectedCategory));
        console.log(overlap)
        
        // mostrar las tarjetas con la categoria seleccionada o si se selecciona "All"
        if (overlap || selectedCategories.includes("all")) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

// Seleccionamos los objetos de clase filter-btn
const filters = document.querySelectorAll(".filter-btn");

// agregar detectores de eventos de clic a los filtros
for (let filter of filters) {
    filter.addEventListener("click", () => {
        
        // remover la clase "active" de todos los botones
        for (let f of filters) {
        f.classList.remove("active");
        }

        // añadimo la calse "active" al boton seleccionado
        filter.classList.add("active");

        // obtener las categorías seleccionadas
        let selectedCategories = [...filters].filter(f => f.classList.contains("active")).map(f => f.dataset.category);

        // filtrar las cartas
        filterCards(selectedCategories);
    });
}





// Eventos con el mouse -------------------------------------------------

function eventoMouse(){
  caja.addEventListener('mouseover',(event)=>{
    event.preventDefault();
    console.log(`Se movio el mouse a la pocicion ${event.clientX},${event.clientY}`);
  });
}




// Formulario ----------------------------------------------------------

// const myForm = document.querySelector("#myForm");
const myForm = document.getElementById("myForm");
if(myForm != null){
  myForm.addEventListener('submit', (event)=> {
    event.preventDefault();// Evita que se recarge la pagina al envíe el formulario
  
    console.log('Se ha enviado el formulario');
    console.log(`Nombre: ${myForm.firstName.value}`);
    console.log(`Apellido: ${myForm.lastName.value}`);
    console.log(`Email: ${myForm.email.value}`);
    console.log(`Tematica: ${myForm.tematica.value}`);
  
  })
}



// Calculadora ----------------------------------------------------------

function calculadora(){
  // Pedimos al usuario que introduzca el primer número
let num1 = prompt("Introduce el primer número:");
        
// Convertimos el número introducido a tipo numérico
num1 = parseFloat(num1);

// Pedimos al usuario que introduzca el segundo número
let num2 = prompt("Introduce el segundo número:");

// Convertimos el número introducido a tipo numérico
num2 = parseFloat(num2);

// Pedimos al usuario que introduzca la operación a realizar
let operacion = prompt("Introduce la operación a realizar (+, -, *, /):");

// Variable donde guardaremos el resultado de la operación
let resultado;

// Realizamos la operación correspondiente
switch (operacion) {
    case "+":
        resultado = num1 + num2;
        break;
    case "-":
        resultado = num1 - num2;
        break;
    case "*":
        resultado = num1 * num2;
        break;
    case "/":
        resultado = num1 / num2;
        break;
    default:
        alert("Operación no válida");
  }

  // Mostramos el resultado por consola y alert
		console.log("El resultado de la operación " + num1 + " " + operacion + " " + num2 + " es: " + resultado);
    alert("El resultado de la operación " + num1 + " " + operacion + " " + num2 + " es: " + resultado);
	
}

// Generador de numeros aleatorios
function num_aleatorios(){
  let cantidad_nums = prompt("Introduce el segundo número:");
  let result_place = document.getElementById("result_num_rdom")
  let numeros_unicos = new Set();
  let resultado 
  if(cantidad_nums < 50){
    while (numeros_unicos.size < cantidad_nums) {
      numeros_unicos.add(Math.floor(Math.random() * 100));
      resultado = [...numeros_unicos];
    }
  }else{
    resultado = "Petición demasiado grande";
  }
  
  console.log(numeros_unicos);
  result_place.innerHTML = resultado;
}