window.onload = function(){
    setInterval(function(){
        $("#preLoader").fadeOut(); //remueve el preloader.
    }, 1000);
    setInterval(function(){
        $("body").removeClass("hidden"); //para remover la clase del body para hacer scroll
    }, 1600);
}