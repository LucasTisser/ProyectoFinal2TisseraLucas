import { Router } from "express";
const productsRouter = Router();

import productPostValidator from "../middlewares/product.middleware.js";
import authValidator from "../middlewares/auth.middleware.js";

import { productsDao as productsApi } from "../daos/main.js";

// Me permite listar todos los productos disponibles o un producto por su id (disponible para usuarios y administradores)
productsRouter.get("/:id?", async (req, res) => {
  const id  = Number(req.params.id);
  try {
    if (id) {
      if (id > 0) {
        // Muestra el producto pedido por su id
        const wasFinded = await productsApi.read(id); 
        
        res.json(wasFinded)
      } else {
        res.status(400).send(`Error al listar el producto con id ${id}`);
      }
    } else {
      // Devuelve todos los productos disponibles
      const products = await productsApi.readAll();
      res.json(products);
    }
  } catch (err) {
   console.log(err)
  }
});
// Para incorporar productos al listado (disponible para administradores)
productsRouter.post(
  "/",
  authValidator,
  productPostValidator,
  async (req, res) => {
    const newProduct = req.body;

    try {
      const result = await productsApi.save(newProduct);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(400).send("Bad Request");
    }
  }
);
// Actualiza un producto por su id (disponible para administradores)
productsRouter.put("/:id", authValidator, async (req, res) => {
  const id = Number(req.params.id);
  const newData = req.body
  console.log(await productsApi.update(newData,id))
    res.json(await productsApi.update(newData,id));
});
// Borra un producto por su id (disponible para administradores)
productsRouter.delete("/:id", authValidator, async (req, res) => {
  // Elimina un producto segun su id
  const id = Number(req.params.id);
  try {
      await productsApi.delete(id);
      res.json("Producto Eliminado");
  } catch {
    res.status(400).send("Bad Request");
  }
});

export default productsRouter;
