import ContainerMem from "../../models/modelMemoria.js"

class CarritosDaoMem extends ContainerMem {

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoMem
