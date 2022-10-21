import ContainerMem from "../../models/modelMemoria.js";

class CarritosDaoMem extends ContainerMem {
  async save(carrito = { productos: [] }) {
    return super.save(carrito);
  }
}

export default CarritosDaoMem;
