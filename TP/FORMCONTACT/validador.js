const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correoElectronico");
const celular = document.getElementById("celular");

const form = document.getElementById("form");
const parrafo = document.getElementById("warning");

form.addEventListener("submit", valor => {
  valor.preventDefault();
  let warning = "";
  let entrar = false;
  /*tamaño de 2 o de 3 el valor de dominio */
  /*w\ coincide cualquier caracter de palabra(alfanumerico o guion bajo),  */
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  /*valida el nombre y el apellido */
  if (nombre.value.length < 3) {
    warning += "El nombre no es valido <br>";
    entrar = true;
  }
  if (apellido.value.length < 4) {
    warning += "El apellido no es valido <br>";
    entrar = true;
  }
  /*si no es un email "asdsa@sd.com" me va a tirar falso en la consola, entonces si es falso entra*/
  if (!regexEmail.test(correo.value)) {
    warning += "El correo no es valido <br>";
    entrar = true;
  }
  /*valida el numero de celular */
  if (celular.value.length < 10) {
    warning += "El celular no es valido <br>";
    entrar = true;
  }
  /*en caso de ser true entrar, avisa que campo es invalido sino muestra enviado. */
  if (entrar) {
    parrafo.innerHTML = warning;
  } else {
    parrafo.innerHTML = "Enviado!";
  }
});
