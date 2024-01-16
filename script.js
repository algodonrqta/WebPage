/* parte inicio */

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}


// Obtener la etiqueta meta por su nombre
var meta = document.querySelector('meta[name="theme-color"]');

// Definir los colores para cada estado de la red
var onlineColor = "#0B610B"; // verde
var offlineColor = "#FF0000"; // rojo

// Crear una función que cambie el color del tema
function changeThemeColor() {
  // Comprobar si el navegador está conectado a internet
  if (navigator.onLine) {
    // Si está conectado, usar el color online
    meta.setAttribute("content", onlineColor);
  } else {
    // Si no está conectado, usar el color offline
    meta.setAttribute("content", offlineColor);
  }
}

// Llamar a la función al cargar la página
changeThemeColor();

// Añadir un evento que escuche los cambios de conexión
window.addEventListener("online", changeThemeColor);
window.addEventListener("offline", changeThemeColor);


// Para boton de instalación de APP
// Obtiene el botón de instalación
const installButton = document.querySelector("#install");

// Declara una variable para almacenar el evento beforeinstallprompt
let installPrompt = null;

// Registra un listener para el evento beforeinstallprompt
window.addEventListener("beforeinstallprompt", (event) => {
  // Evita que el navegador muestre su propia UI de instalación
  event.preventDefault();
  // Guarda el evento para usarlo más tarde
  installPrompt = event;
  // Muestra el botón de instalación
  installButton.removeAttribute("hidden");
});

// Registra un listener para el evento click del botón de instalación
installButton.addEventListener("click", async () => {
  // Verifica que el evento beforeinstallprompt exista
  if (!installPrompt) {
    return;
  }
  // Muestra el diálogo de instalación
  const result = await installPrompt.prompt();
  // Registra el resultado del diálogo de instalación
  console.log(`El resultado del diálogo de instalación fue: ${result.outcome}`);
  // Borra el evento beforeinstallprompt
  installPrompt = null;
  // Oculta el botón de instalación
  installButton.setAttribute("hidden", "");
});