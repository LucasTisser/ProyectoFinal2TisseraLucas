import ContainerArchivo from "../../models/modelArchivo.js"

class CarritosDaoArchivo extends ContainerArchivo {

    constructor() {
        super('carritos.model.json')
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoArchivo
