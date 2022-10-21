import ContainerArchivo from "../../models/modelArchivo.js";

class CarritosDaoArchivo extends ContainerArchivo {
  constructor() {
    super("carritos.json");
  }

  async save(carrito = { productos: [] }) {
    return super.save(carrito);
  }
}

export default CarritosDaoArchivo;
