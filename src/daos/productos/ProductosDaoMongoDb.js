import ContainerMongoDb from "../../models/modelMongoDb.js";

class ProductosDaoMongoDb extends ContainerMongoDb {
  constructor() {
    super("productos", {
      nombre: { type: String, required: true },
      descripcion: { type: String, required: true },
      codigo: { type: String, required: true },
      stock: { type: Number, required: true },
      foto: { type: String, required: true },
      precio: { type: Number, required: true },
    });
  }
}

export default ProductosDaoMongoDb;
