import ContainerMongoDb from "../../models/modelMongoDb.js";

class CarritosDaoMongoDb extends ContainerMongoDb {
    constructor(){
        super('Carritos', {
            productos: {type: [],required: true}
        })
    }
    async save(carrito = { productos: [] }){
        return super.save(carrito)
    }
}

export default CarritosDaoMongoDb