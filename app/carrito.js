// Creando nuestra clase para el carrito
class Carrito {
    constructor() {
      this.productos = [];
    }
  
    // Agregar productos al carrito
    agregarProducto(producto, cantidad) {
      const xProducto = this.productos.find((p) => p.producto === producto);
      if (xProducto) {
        xProducto.cantidad += cantidad;
      } else {
        this.productos.push({ producto, cantidad });
      }
    }
  
    // Remover productos del carrito
    removerProducto(indice) {
      this.productos.splice(indice, 1);
    }
  
    // Obtener el precio total del carrito
    getPrecioTotal() {
      let precioTotal = 0;
      for (let { producto, cantidad } of this.productos) {
        precioTotal += producto.precio * cantidad;
      }
      return precioTotal;
    }
  
    // Generar un código de descuento aleatorio
    generarCodigoDescuento() {
      const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let codigoDescuento = "";
      for (let i = 0; i < 8; i++) {
        codigoDescuento += caracteres.charAt(
          Math.floor(Math.random() * caracteres.length)
        );
      }
      return codigoDescuento;
    }
  
    // Pagar con tarjeta de débito
    pagarConTarjetaDebito() {
      const codigoDescuento = this.generarCodigoDescuento();
      const total = this.getPrecioTotal();
      const totalConDescuento = total * 0.8;
      alert(`
        Pagando con Tarjeta de Débito:\n
        Código de Descuento: ${codigoDescuento}\n 
        Precio Total (antes del descuento): $${total.toFixed(2)}\n 
        Precio Total con Descuento: $${totalConDescuento.toFixed(2)}
      `);
  
      this.vaciarCarrito();
    }
  
    // Pagar con tarjeta de crédito
    pagarConTarjetaCredito() {
      const total = this.getPrecioTotal();
      const opciones = [
        "Pagar en una sola exhibición",
        "Pagar en 3 cuotas",
        "Pagar en 6 cuotas",
        "Pagar en 9 cuotas",
        "Pagar en 12 cuotas",
      ];
      const opcion = prompt(
        "Elige una opción de cuotas:\n" +
          opciones.map((opt, indice) => `${indice + 1}. ${opt}`).join("\n") +
          "\nIngresa tu elección:"
      );
      let cuotas = 1;
      if (opcion >= 2 && opcion <= 5) {
        cuotas = parseInt(opcion);
      }
      const pagoMensual = total / cuotas;
      alert(`
        Pago Mensual: $${pagoMensual.toFixed(2)}\n
        Precio Total: $${total.toFixed(2)}
      `);
  
      this.vaciarCarrito();
    }
  
    // Vaciar el carrito
    vaciarCarrito() {
      this.productos = [];
    }
  
    // Mostrar el contenido del carrito
    mostrarCarrito() {
      let mensajeCarrito = "Contenido del Carrito:\n";
      if (this.productos.length === 0) {
        mensajeCarrito += "El carrito está vacío.";
      } else {
        let i = 0;
        for (const { producto, cantidad } of this.productos) {
          mensajeCarrito += `${i + 1}. ${producto.nombre} - $${producto.precio.toFixed(2)} x ${cantidad}\n`;
          i++;
        }
        const precioTotal = this.getPrecioTotal();
        mensajeCarrito += `Precio Total: $${precioTotal.toFixed(2)}`;
      }
      alert(mensajeCarrito);
    }
  }
  
  export default Carrito;
  