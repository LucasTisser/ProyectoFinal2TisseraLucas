import productsModel from "../../models/productos.model"

class ProductosDaoArchivo extends productsModel {

    constructor() {
        super('productos.model.json')
    }
}

export default ProductosDaoArchivo
