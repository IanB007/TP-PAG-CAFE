$(document).ready(function(){ //se empieza a ejecutar el js cuando termina de cargar la pagina

    let inicio = 0;
    let cafes = [
        {
            "nombre": "Latte",
            "precio": "$650",
            "cant": 0
        },
        {
            "nombre": "Capuccino",
            "precio": "$500",
            "cant": 0
        },
        {
            "nombre": "Cafe Negro",
            "precio": "$450",
            "cant": 0
        },
    ];

    //cambia la informacion del cafe

    $("#prevCarrusel").click(function(){
        if (inicio == 0) {
            inicio = 2;
        }else{
            inicio--;
        }
        document.getElementById("productoSelector").innerHTML = cafes[inicio].nombre;
        document.getElementById("precioSelector").innerHTML = cafes[inicio].precio;
        document.getElementById("contadorCarrito").innerHTML = cafes[inicio].cant;
    })

    $("#nextCarrusel").click(function(){
        if (inicio == 2) {
            inicio = 0;
        }else{
            inicio++;
        }
        document.getElementById("productoSelector").innerHTML = cafes[inicio].nombre;
        document.getElementById("precioSelector").innerHTML = cafes[inicio].precio;
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

//agregar al carrito




});