// Creando nuestra clase para nuestro stock
class Producto {
    constructor(nombre, precio, enStock) {
      this.nombre = nombre;
      this.precio = precio;
      this.enStock = enStock;
    }
  }
  
  // Stock
  const productos = [
    new Producto("Zapatillas Nike Air Max 270", 149.99, true),
    new Producto("Zapatillas Adidas Ultraboost", 169.99, true),
    new Producto("Zapatillas Puma RS-X", 119.99, false),
    new Producto("Zapatillas Reebok Classic", 99.99, true),
    new Producto("Zapatillas New Balance 574", 89.99, true),
    new Producto("Zapatillas Converse Chuck Taylor", 79.99, false),
  ];
  
  export default productos;
  