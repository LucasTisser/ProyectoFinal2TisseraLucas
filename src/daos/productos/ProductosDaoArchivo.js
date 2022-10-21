import ContainerArchivo from "../../models/modelArchivo.js";

class ProductosDaoArchivo extends ContainerArchivo {
  constructor() {
    super("productos.json");
  }
}

export default ProductosDaoArchivo;
