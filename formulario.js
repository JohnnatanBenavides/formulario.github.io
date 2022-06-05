const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", mostrarDatos);

function mostrarDatos(e)
{
    e.preventDefault();
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let celular = document.getElementById("celular").value;
    
    let mensaje = document.getElementById("respuesta");
    mensaje.textContent = "Hola!... "+nombres+" "+apellidos+", gracias por registrarte \n"+
                        "enviaremos un mensaje a tu correo "+correo+" y a tu celular " +celular;

                    }

