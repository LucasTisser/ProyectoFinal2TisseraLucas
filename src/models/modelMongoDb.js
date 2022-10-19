import mongoose from "mongoose"
import config from "../config.js"
import { asPOJO, renameField, removeField } from "../utils/objectUtils.js"

await mongoose.connect(config.mongodb.cnxStr,config.mongodb.options)

class ContainerMongoDb {

    constructor(nombreColeccion, esquema){
        this.coleccion = mongoose.model(nombreColeccion, esquema)
    }

    async save(newElem) {
        try {
            let doc = await this.coleccion.create(newElem)
            doc = asPOJO(doc)
            renameField(doc, '_id', 'id')
            removeField(doc, '__v')
            return doc
        } catch (error) {
          throw new Error(`Error al guardar: ${error}`);
        }
      }
    
      async readAll() {
        try {
        let docs = await this.coleccion.find({},{__v: 0}).lean()
        docs = docs.map(asPOJO)
        docs = docs.map(d => renameField(d,'_id','id'))
        return docs
        } catch (err) {
          const dataBase = {
            error: err,
          };
          this.save(dataBase);
          return dataBase;
        }
      }
    
      async read(id){
        try { 
            const docs = await this.coleccion.find({'_id' : id}, {__v: 0})
            if (docs.length == 0) {
                throw new Error(`Error al listar por id: no se encontro el id ${id}`)
            } else {
                const result = renameField(asPOJO(docs[0], '_id', 'id'))
                return result
            }
        } catch (err) {
            throw new Error(`Error al listar por id: ${err}`)
        }
      }
    
      async update(newData,id) {
         try{
            renameField(newData, 'id', '_id')
            const { n, nModified } = await this.coleccion.replaceOne({ '_id': id})
         if (n == 0 || nModified == 0) {
            throw new Error('Error al actualizar: no encontrado')
         } else {
            renameField(newData, '_id', 'id')
            removeField(newData, '__v')
            return asPOJO(newData)
         }
        } catch (err){
            throw new Error(`Error al actualizar: ${err} `)
         }
        }
    
      async delete(id) {
            try{
                const { n, nDeleted } = await this.coleccion.deleteOne({ '_id': id})
                if (n == 0 || nDeleted == 0) {
                    throw new Error('Error al borrar: no encontrado')
                }
            } catch (err) {
                throw new Error(`Error al borrar: ${err}`)
            }
        }
    
      async deleteAll() {
        try {
          await this.coleccion.deleteMany({})
        } catch (error) {
            throw new Error(`Error al borrar todo: ${error}`)
        }
    }
}

export default ContainerMongoDb