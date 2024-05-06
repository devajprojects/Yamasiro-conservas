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
  cardCol.classList.add("col-lg-4", "col-md-6", "col-sm-12", "mb-4"); // Cambiado a col-lg-4 para mostrar tres tarjetas por fila en pantallas grandes, col-md-6 para mostrar dos tarjetas por fila en pantallas medianas, y col-sm-12 para mostrar una tarjeta por fila en pantallas pequeñas

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "h-auto",); // Altura automática de la tarjeta para que se ajuste al contenido

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "px-3", "py-3");

  const imagesContainer = document.createElement("div");
  imagesContainer.classList.add("d-flex", "justify-content-center"); // Establecer diseño en línea y alineación al centro

  const image1 = document.createElement("img");
  image1.src = card.imageSrc1; // Usar card.imageSrc1 para la primera imagen
  image1.alt = card.alt1;
  image1.classList.add("card-img-top", "mr-2", "img-fluid"); // Agregar clase img-fluid para hacer la imagen responsiva

  const image2 = document.createElement("img");
  image2.src = card.imageSrc2; // Usar card.imageSrc2 para la segunda imagen
  image2.alt = card.alt2;
  image2.classList.add("card-img-top", "img-fluid"); // Agregar clase img-fluid para hacer la imagen responsiva

  imagesContainer.appendChild(image1);
  imagesContainer.appendChild(image2);
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
