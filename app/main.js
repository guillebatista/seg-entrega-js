// Importando los archivos necesarios
import productos from "./stock.js";
import Carrito from "./carrito.js";

// Creando una instancia del carrito
const carrito = new Carrito();

// Mensaje de bienvenida a la aplicación
alert("👟 Bienvenido a la Tienda de Guille");

// Creando una variable booleana para controlar el bucle while
let salir = false;
while (!salir) {
    const opcion = prompt(
        "Menú Principal:\n" +
          "1. Mostrar Productos\n" +
          "2. Mostrar Carrito\n" +
          "3. Ver Total de Compra\n" +
          "4. Pagar\n" +
          "5. Salir\n\n" +
          "Ingresa tu opción:"
      );

  switch (opcion) {
    case "1":
      let mensajeProductos = "Lista de Productos:\n";
      for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        mensajeProductos += `${i + 1}. ${producto.nombre} - $${producto.precio.toFixed(
          2
        )}\n`;
      }
      const opcionProducto = prompt(
        mensajeProductos +
          "\nIngresa el número del producto que deseas agregar al carrito o ('0' para cancelar):"
      );
      const indiceProducto = parseInt(opcionProducto) - 1;
      if (indiceProducto === -1) {
        alert("Se canceló la adición del producto al carrito.");
      } else if (indiceProducto >= 0 && indiceProducto < productos.length) {
        const productoSeleccionado = productos[indiceProducto];

        if (productoSeleccionado.enStock) {
          const cantidad = parseInt(
            prompt("Ingresa la cantidad que deseas agregar al carrito:")
          );
          if (cantidad > 0) {
            carrito.agregarProducto(productoSeleccionado, cantidad);
            alert(`Se agregaron ${cantidad} ${productoSeleccionado.nombre}(s) al carrito.`);
          } else {
            alert("Cantidad inválida. No se agregó el producto al carrito.");
          }
        } else {
          alert("¡Ups! Lo Sentimo /nEste producto no está disponible en stock en este momento. Intenta con otro.");
        }
      } else {
        alert("Número de producto inválido.");
      }
      break;

    case "2":
      carrito.mostrarCarrito();
      if (carrito.productos.length === 0) {
        alert("El carrito está vacío.No se puede proceder al pago.");
        break;
      }
      const opcionEliminar = prompt(
        "Ingresa el número del producto que deseas eliminar del carrito o ('0' para cancelar):"
      );
      const indiceEliminar = parseInt(opcionEliminar) - 1;
      if (indiceEliminar === -1) {
        alert("Se canceló la eliminación del producto del carrito.");
      } else if (indiceEliminar >= 0 && indiceEliminar < carrito.productos.length) {
        carrito.removerProducto(indiceEliminar);
        alert("Producto eliminado del carrito.");
      } else {
        alert("Número de producto inválido.");
      }
      break;

    case "3":
      carrito.mostrarCarrito();
      if (carrito.productos.length === 0) {
        alert("El carrito está vacío. No se puede calcular el total.");
        break;
      }
      const precioTotal = carrito.getPrecioTotal();
      alert(`El total de tu compra es: $${precioTotal.toFixed(2)}`);
      break;

      case "4":
        if (carrito.productos.length === 0) {
          alert("El carrito está vacío. No se puede proceder al pago.");
          break;
        }
  
        const metodoPago = prompt(
          "Selecciona un método de pago:\n" +
            "1. Pago con Tarjeta de Débito\n" +
            "2. Pago con Tarjeta de Crédito\n\n" +
            "Ingresa tu opción:"
        );
  
        switch (metodoPago) {
            case "1":
              alert("Gracias por tu compra con débito");
              break;
          
            case "2":
              alert("Gracias por tu compra con crédito");
              break;
          
            default:
              alert("Opción de método de pago inválida.");
              break;
          }
          break;
          
  
      case "5":
        salir = true;
        break;
    default:
      alert("Opción inválida. Por favor, selecciona una opción válida del menú.");
      break;
  }
}

alert("¡Gracias por comprar en nuestra tienda!!! Vuelve pronto.");
