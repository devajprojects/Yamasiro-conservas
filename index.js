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
