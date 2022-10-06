class ContainerMem {

  constructor() {
    this.elem = [];
  }

  async save(elem) {
    try {
      let newId
        if (this.elem.length == 0) {
            newId = 1
        } else {
            newId = this.elem[this.elem.length -1].id + 1
        }

    const newElem = {...elem, id: newId}
    this.elem.push(newElem)

      return newElem;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async readAll() {
    return [...this.elem]
  }

  async read(id){
    const finded = this.elem.find(obj => obj.id == id)

    if (!finded){
        throw new Error(`Error al listar: elemento no encontrado`)
    } else {
        return finded;
    }
  }

  async update(elem,id) {
    const idN = Number(id)
    const index = this.elem.findIndex(obj => obj.id === idN );

    if (index == -1) {
      throw new Error(`Error al actualizar: no se encontro el id ${id}`)
    } else {
      // Problema a solucionar
      // Cuando se actualiza la informacion, se pierde toda key
      // que no se ha mencionado
      // ej del problema: si quiero cambiar solo nombre,
      // tengo que colocar toda la informacion del producto
      // para que se actualize nombre y no se elimine los demas keys
      this.elem[index] = {...elem, id:idN}
       return {...elem, id:idN}
    }
  }

  async delete(id) {
    const index = this.elem.findIndex((product) => product.id === id);

    if (index == -1) {
        throw new Error(`Error al borrar: no se encontro el id ${id}`)
    }else {
        return this.elem.splice(index, 1);
    }
  }

  async deleteAll() {
    this.elem = []
}
}

export default ContainerMem