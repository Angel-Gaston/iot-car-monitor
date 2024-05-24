
let mensaje=document.getElementById("Respuesta");

function callApiRequest() {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get("http://3.8.235.9/iot-car-control/back-end/apis/getRegistro.php")
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);

      let respuestaServidor =
        response.data === "w"
          ? "ADELANTE"
          : response.data === "s"
          ? "ATRAS"
          : response.data === "a"
          ? "IZQUIERDA"
          : response.data === "d"
          ? "DERECHA"
          : "DETENER";
      
      // Mostrar respuestaServidor en un elemento HTML con id "Respuesta"
      document.getElementById("Respuesta").innerHTML = "Respuesta: <strong>" + respuestaServidor + "</strong>";
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera ejecutado
    });
}


setInterval(callApiRequest, 2000); // Ejecutar la función cada 2000 milisegundos (2 segundos)
