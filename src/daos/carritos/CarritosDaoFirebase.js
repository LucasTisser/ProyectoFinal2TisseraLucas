import ContainerFirebase from "../../models/modelFirebase.js";

class CarritosDaoFirebase extends ContainerFirebase {

    constructor(){
        super('Carritos')
    }

    async save(carrito = { productos: [] }){
        return super.save(carrito)
    }
}

export default CarritosDaoFirebase