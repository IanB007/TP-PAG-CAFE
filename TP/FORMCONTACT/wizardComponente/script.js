$(document).ready(function(){ //se empieza a ejecutar el js cuando termina de cargar la pagina

    //variables cards
    let p1 = document.getElementById("card1");
    let p2 = document.getElementById("card2");
    let p3 = document.getElementById("card3");
    let p4 = document.getElementById("card4");
    let p5 = document.getElementById("card5");

    let cardContador = [p1, p2, p3, p4, p5];
    let x = 0;

    //oculto cards > paso1
    for (let i = 1; i <= 4; i++) {
        $(cardContador[i]).hide()
    }

    //boton siguiente
    $(".siguiente").click(function(){
        $(cardContador[x]).hide();
        x++;
        $(cardContador[x]).show();
    })

    //boton anterior
    $(".anterior").click(function(){
        $(cardContador[x]).hide();
        x--;
        $(cardContador[x]).show();
    })

    //realizar otro pedido
    $("#backto1").click(function(){
        $(cardContador[x]).hide();
        x = 0
        $(cardContador[x]).show();
    })

    let inicio = 0;
    let cafes = [
        {
            "nombre": "Cream Coffee",
            "precio": 400,
            "cant": 0
        },
        {
            "nombre": "Capuccino Coffee",
            "precio": 600,
            "cant": 0
        },
        {
            "nombre": "Expresso Coffee",
            "precio": 500,
            "cant": 0
        },
    ];

    //estado inicial nombre y precio cafe

    document.getElementById("productoSelector").innerHTML = cafes[inicio].nombre;
    document.getElementById("precioSelector").innerHTML = "$" + cafes[inicio].precio;

    //cambia la informacion del cafe

    $("#prevCarrusel").click(function(){
        if (inicio == 0) {
            inicio = 2;
        }else{
            inicio--;
        }
        document.getElementById("productoSelector").innerHTML = cafes[inicio].nombre;
        document.getElementById("precioSelector").innerHTML = "$" + cafes[inicio].precio;
        document.getElementById("contadorCarrito").innerHTML = cafes[inicio].cant;
    })

    $("#nextCarrusel").click(function(){
        if (inicio == 2) {
            inicio = 0;
        }else{
            inicio++;
        }
        document.getElementById("productoSelector").innerHTML = cafes[inicio].nombre;
        document.getElementById("precioSelector").innerHTML = "$" + cafes[inicio].precio;
        document.getElementById("contadorCarrito").innerHTML = cafes[inicio].cant;
    })

//sumar o restar al carrito

$('#sumar').click(function() {
    if (cafes[inicio].cant >= 0) {
        cafes[inicio].cant++;
    }
    document.getElementById("contadorCarrito").innerHTML = cafes[inicio].cant;
    console.log(cafes[inicio])
    switch (inicio) {
        case 0:
            document.getElementById("cont1").innerHTML = cafes[inicio].cant;
            break;
        case 1:
            document.getElementById("cont2").innerHTML = cafes[inicio].cant;
            break;
        case 2:
            document.getElementById("cont3").innerHTML = cafes[inicio].cant;
            break;
    }
    
})

$('#restar').click(function() {
    if (cafes[inicio].cant > 0) {
        cafes[inicio].cant--;
    }
    document.getElementById("contadorCarrito").innerHTML = cafes[inicio].cant;
    console.log(cafes[inicio])
    switch (inicio) {
        case 0:
            document.getElementById("cont1").innerHTML = cafes[inicio].cant;
            break;
        case 1:
            document.getElementById("cont2").innerHTML = cafes[inicio].cant;
            break;
        case 2:
            document.getElementById("cont3").innerHTML = cafes[inicio].cant;
            break;
    }
    
})

//sumar al total

$('#pasoDos').click(function(){
    let contador = 0;

    for (let i = 0; i<cafes.length; i++) {
        contador = contador + (cafes[i].cant * cafes[i].precio)
    }

    console.log(contador)
    document.getElementById("total").innerHTML = contador
})
    

//numero de orden

let random = Math.floor(Math.random() * 100);

$('#fin').click(function(){ 
    document.getElementById("numOrden").innerHTML = random;
    random++;
})




});