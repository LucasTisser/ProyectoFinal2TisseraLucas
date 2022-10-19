import { Router } from "express";
const productsRouter = Router();

import productPostValidator from "../middlewares/product.middleware.js";
import authValidator from "../middlewares/auth.middleware.js";

import { productsDao as productsApi } from "../daos/main.js";

// Me permite listar todos los productos disponibles(disponible para usuarios y administradores)
productsRouter.get("/", async (req, res) => {
  try {
      // Devuelve todos los productos disponibles
      const products = await productsApi.readAll();
      res.json(products);
  } catch (err) {
   console.log(err)
  }
});

// Para listar un producto por su id
productsRouter.get("/:id", async (req,res) => {
  res.json(await productsApi.read(req.params.id))
})
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
  const id = req.params.id;
  const newData = req.body
    res.json(await productsApi.update(newData,id));
});
// Borra un producto por su id (disponible para administradores)
productsRouter.delete("/:id", authValidator, async (req, res) => {
  // Elimina un producto segun su id
  const id = req.params.id;
  try {
      await productsApi.delete(id);
      res.json("Producto Eliminado");
  } catch {
    res.status(400).send("Bad Request");
  }
});

export default productsRouter;
