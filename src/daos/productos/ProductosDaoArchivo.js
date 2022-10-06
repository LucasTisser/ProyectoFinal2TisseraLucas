import ContainerArchivo from "../../models/productos.model"

class ProductosDaoArchivo extends ContainerArchivo {

    constructor() {
        super('productos.json')
    }
}

export default ProductosDaoArchivo
