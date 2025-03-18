const cardsData = [
  {
    imageSrc1: "./assets/marcas/logo_gallardo.png", // Ruta de la primera imagen para la tarjeta
    imageSrc2: "./assets/marcas/mendoza.png", // Ruta de la segunda imagen para la tarjeta
    alt1: "Logo Gallardo", // Texto alternativo para la primera imagen
    alt2: "Logo Gullo", // Texto alternativo para la segunda imagen
  },
  {
    imageSrc1: "./assets/marcas/logo_gullo.png", // Ruta de la primera imagen para la tarjeta
    imageSrc2: "./assets/marcas/mendoza.png", // Ruta de la segunda imagen para la tarjeta
    alt1: "Logo Didier", // Texto alternativo para la primera imagen
    alt2: "Logo Nedelton", // Texto alternativo para la segunda imagen
  },
  {
    imageSrc1: "./assets/marcas/logo_brennan.png", // Ruta de la primera imagen para la tarjeta
    imageSrc2: "./assets/marcas/rio_negro.png", // Ruta de la segunda imagen para la tarjeta
    alt1: "Logo Didier", // Texto alternativo para la primera imagen
    alt2: "Logo Nedelton", // Texto alternativo para la segunda imagen
  },
  {
    imageSrc1: "./assets/marcas/logo_sal_de_campo.png", // Ruta de la primera imagen para la tarjeta
    imageSrc2: "./assets/marcas/cordoba.png", // Ruta de la segunda imagen para la tarjeta
    alt1: "Logo Gallardo", // Texto alternativo para la primera imagen
    alt2: "Logo Gullo", // Texto alternativo para la segunda imagen
  },
  {
    imageSrc1: "./assets/marcas/logo_norma_galius.png", // Ruta de la primera imagen para la tarjeta
    imageSrc2: "./assets/marcas/santa_fe.png", // Ruta de la segunda imagen para la tarjeta
    alt1: "Logo Didier", // Texto alternativo para la primera imagen
    alt2: "Logo Nedelton", // Texto alternativo para la segunda imagen
  },
  {
    imageSrc1: "./assets/marcas/logo_mande_picantes.png", // Ruta de la primera imagen para la tarjeta
    imageSrc2: "./assets/marcas/buenos_aires.png", // Ruta de la segunda imagen para la tarjeta
    alt1: "Logo Didier", // Texto alternativo para la primera imagen
    alt2: "Logo Nedelton", // Texto alternativo para la segunda imagen
  },
  {
    imageSrc1: "./assets/marcas/logo_scozzatti.png", // Ruta de la primera imagen para la tarjeta
    imageSrc2: "./assets/marcas/santa_fe.png", // Ruta de la segunda imagen para la tarjeta
    alt1: "Logo Gallardo", // Texto alternativo para la primera imagen
    alt2: "Logo Gullo", // Texto alternativo para la segunda imagen
  },
  {
    imageSrc1: "./assets/marcas/logo_allolio.png", // Ruta de la primera imagen para la tarjeta
    imageSrc2: "./assets/marcas/mendoza.png", // Ruta de la segunda imagen para la tarjeta
    alt1: "Logo Didier", // Texto alternativo para la primera imagen
    alt2: "Logo Nedelton", // Texto alternativo para la segunda imagen
  },
  {
    imageSrc1: "./assets/marcas/logo_regionales_del_norte.png", // Ruta de la primera imagen para la tarjeta
    imageSrc2: "./assets/marcas/corrientes.png", // Ruta de la segunda imagen para la tarjeta
    alt1: "Logo Didier", // Texto alternativo para la primera imagen
    alt2: "Logo Nedelton", // Texto alternativo para la segunda imagen
  },
  // Agrega más datos de tarjetas según sea necesario
];

// Función para crear elementos de tarjeta con dos imágenes una al lado de la otra
function createCardElement(card) {
  const cardCol = document.createElement("div");
  cardCol.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4"); // Usar col-12 para que las tarjetas ocupen el ancho completo en pantallas pequeñas

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "h-100"); // Altura 100% de la tarjeta

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "px-3", "py-3");

  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("d-flex", "justify-content-center"); // Establecer diseño en línea y alineación al centro

  const imageContainer1 = document.createElement("div");
  imageContainer1.classList.add("w-100", "mb-2"); // Establecer anchura al 100% y margen inferior
  const image1 = document.createElement("img");
  image1.src = card.imageSrc1; // Usar card.imageSrc1 para la primera imagen
  image1.alt = card.alt1;
  image1.classList.add("img-fluid"); // Hacer la imagen responsiva

  const imageContainer2 = document.createElement("div");
  imageContainer2.classList.add("w-100"); // Establecer anchura al 100%
  const image2 = document.createElement("img");
  image2.src = card.imageSrc2; // Usar card.imageSrc2 para la segunda imagen
  image2.alt = card.alt2;
  image2.classList.add("img-fluid"); // Hacer la imagen responsiva

  imageContainer1.appendChild(image1);
  imageContainer2.appendChild(image2);
  imagesContainer.appendChild(imageContainer1);
  imagesContainer.appendChild(imageContainer2);
  cardBody.appendChild(imagesContainer);
  cardDiv.appendChild(cardBody);
  cardCol.appendChild(cardDiv);

  return cardCol;
}

// Cargar las tarjetas cuando se cargue la página
window.addEventListener("load", function () {
  const cardContainer = document.getElementById("card-container");
  cardsData.forEach(function (cardData) {
    const cardElement = createCardElement(cardData);
    cardContainer.appendChild(cardElement);
  });
});






//  Modificaciones para Validar y Enviar el Formulario

emailjs.init("1kKjt4l-hmHGv_vTs");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const btn = document.getElementById("button");

  if (!validarFormulario()) {
    return;
  }

  // Verifico si el usuario ya envió un email recientemente
  const tiempoUltimoEnvio = localStorage.getItem("ultimoEnvioEmail");
  const tiempoActual = new Date().getTime();
  const tiempoEspera = 60000; // 60 segundos

  if (tiempoUltimoEnvio && tiempoActual - tiempoUltimoEnvio < tiempoEspera) {
    alert("Debes esperar 60 segundos antes de enviar otro mensaje.");
    document.getElementById("form").reset(); //Acá limpio el formulario para Complicar aún más los envíos mal malintencionados
    return;
  }

  // Guardo el momento del envío en el localStorage
  localStorage.setItem("ultimoEnvioEmail", tiempoActual);

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_kymftkf";

  emailjs
    .sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = "Enviar";
      alert(
        "Los datos enviados fueron: \n" +
          "Nombre: " +
          document.getElementById("name").value +
          "\n" +
          "eMail: " +
          document.getElementById("email").value +
          "\n" +
          "Mensaje: " +
          document.getElementById("message").value +
          "\n"
      );

      // Reseteo el formulario después del envío exitoso
      document.getElementById("form").reset();
    })
    .catch((err) => {
      btn.value = "Enviar";
      alert("Error al enviar el mensaje: " + JSON.stringify(err));
    });
});

function validarFormulario() {
  let validacionCorrecta = true;

  const nombre = document.getElementById("name");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("message");

  let errorNombre = document.getElementById("errorNombre");
  let errorEmail = document.getElementById("errorEmail");
  let errorMensaje = document.getElementById("errorMensaje");

  // Validación del nombre
  if (nombre.value.trim().length < 3) {
    mostrarError(errorNombre, "El nombre debe tener al menos 3 caracteres.");
    validacionCorrecta = false;
  } else {
    ocultarError(errorNombre);
  }

  // Validación del email con regex
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  if (!emailRegex.test(email.value)) {
    mostrarError(errorEmail, "Ingrese un correo válido.");
    validacionCorrecta = false;
  } else {
    ocultarError(errorEmail);
  }

  // Validación del mensaje
  if (mensaje.value.trim().length < 10) {
    mostrarError(errorMensaje, "El mensaje debe tener al menos 10 caracteres.");
    validacionCorrecta = false;
  } else {
    ocultarError(errorMensaje);
  }

  return validacionCorrecta;
}

const mostrarError = (elemento, mensaje) => {
  elemento.textContent = mensaje;
  elemento.style.display = "block";
  elemento.style.color = "orange";
};

const ocultarError = (elemento) => {
  elemento.textContent = "";
  elemento.style.display = "none";
};
