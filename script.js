let botones = document.querySelectorAll(".boton");
let calificacion = document.querySelector(".calificacion");

botones.forEach((boton) => {
  boton.addEventListener("click", function () {
    botones.forEach((boton) => (boton.style.backgroundColor = "rgb(39, 46, 56)"));
    boton.style.backgroundColor = "#FFFFFE";
    calificacion.innerText = `You selected ${boton.value} out of 5`;
  });
});

let botonCalificar = document.querySelector(".boton-submit");

botonCalificar.addEventListener ("click", function() {
    let componenteCalificador = document.querySelector(".componente-calificador");
    let mensaje = document.querySelector(".mensaje");
    mensaje.style.display = "flex";
    componenteCalificador.style.display = "none";
});