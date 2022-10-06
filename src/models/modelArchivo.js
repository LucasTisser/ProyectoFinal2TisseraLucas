const { writeFile, readFile } = require("fs").promises;
import config from "../config.js";

class ContainerArchivo {

  constructor(ruta) {
    this.ruta = `${config.fileSystem.path}/${ruta}`;
  }

  async save(obj) {
    try {
        const objs = await this.read();

        if (objs.length == 0) {
            newId = 1
        } else {
            newId = objs[objs.length -1].id + 1
        }

    const newObj = {...obj, id: newId}
    objs.push(newObj)

      const stringData = JSON.stringify(objs, null, 2);
      await writeFile(this.ruta, stringData);

      return newObj;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async readAll() {
    try {
      const stringData = await readFile(this.ruta, "utf-8");
      console.log(stringData)
      const parsedData = JSON.parse(stringData);
      return parsedData;
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
    const objs = await this.readAll()
    const wasfinded = objs.find(obj => obj.id == id)

    wasfinded ? 
    wasfinded:
    "No se ha encontrado"
  }

  async update(elem) {
    const objs = await this.readAll();
    const index = objs.findIndex(obj => obj.id === elem.id);

    if (index == -1) {
      throw new Error(`Error al actualizar: no se encontro el id ${id}`)
    } else {
       objs[index] = elem
     try{
        const stringData = JSON.stringify(objs, null, 2)
        await writeFile(this.ruta, stringData)
     } catch (err){
        throw new Error(`Error al actualizar: ${err} `)
     }
    }
  }

  async delete(id) {
    const objs = await this.readAll();
    const index = objs.findIndex((product) => product.id === id);

    if (index == -1) {
        throw new Error(`Error al borrar: no se encontro el id ${id}`)
    }else {
        objs.splice(index, 1);
        try{
            const stringData = JSON.stringify(objs,null,2)
            await writeFile( this.ruta, stringData )
        } catch (err) {
            throw new Error(`Error al borrar: ${err}`)
        }
    }
  }

  async deleteAll() {
    try {
        await writeFile(this.ruta, JSON.stringify([], null, 2))
    } catch (error) {
        throw new Error(`Error al borrar todo: ${error}`)
    }
}
}

export default ContainerArchivo