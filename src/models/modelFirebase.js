import admin from "firebase-admin"
import config from "../config.js"

admin.initializeApp({
    credential: admin.credential.cert(config.firebase)
})

const db = admin.firestore()

class ContainerFirebase{

    constructor(nombreColeccion){
        this.coleccion = db.collection(nombreColeccion)
    }

    async save(newElem) {
        try {
            const guardado = await this.coleccion.add(newElem)
            return { ...newElem, id: guardado.id}
        } catch (error) {
          throw new Error(`Error al guardar: ${error}`);
        }
      }
    
      async readAll() {
        try {
          const result = []
          const snapshot = await this.coleccion.get();
          snapshot.forEach(doc => {
            result.push({id:doc.id, ...doc.data() })
          })
          return result
        } catch (err) {
          const dataBase = {
            nextId: 1,
            productsList: [],
            error: err,
          };
          this.save(dataBase);
          return dataBase;
        }
      }
    
      async read(id){
        try { 
            const doc = await this.coleccion.doc(id).get();
            if (!doc.exists) {
                throw new Error(`Error al listar por id: no se encontro el id ${id}`)
            } else {
                const data = doc.data();
                return { ...data, id}
            }
        } catch (err) {
            throw new Error(`Error al listar por id: ${err}`)
        }
      }
    
      async update(newData,id) {
         try{
            const actualizado = await this.coleccion.doc(id).set(newData)
            return actualizado
         } catch (err){
            throw new Error(`Error al actualizar: ${err} `)
         }
        }
    
      async delete(id) {
            try{
                const item = await this.coleccion.doc(id).delete()
                return item;
            } catch (err) {
                throw new Error(`Error al borrar: ${err}`)
            }
        }
    
      async deleteAll() {
        try {
          const docs = await this.readAll()
          const ids = docs.map(doc => doc.id)
          const promesas = ids.map(id => this.delete(id))
          const resultados = await Promise.allSettled(promesas)
          const errores = resultados.filter(r => r.status == 'rejected')
          if (errores.length > 0) {
            throw new Error('No se borro todo. Volver a intentarlo')
          }  
        } catch (error) {
            throw new Error(`Error al borrar todo: ${error}`)
        }
    }

    async desconectar(){       
    }
}

export default ContainerFirebase