import ContainerMongoDb from "../../models/modelMongoDb.js";

class ProductosDaoMongoDb extends ContainerMongoDb {
    constructor(){
        super('productos', {
            title: {type: String,required:true},
            precio: {  type: Number, required: true},
            thumbnail: {type: String, required: true}
        } )
    }
}

export default ProductosDaoMongoDb