import cartModel from "../../models/carritos.model.js"

class CarritosDaoArchivo extends cartModel {

    constructor() {
        super('carritos.model.json')
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoArchivo
