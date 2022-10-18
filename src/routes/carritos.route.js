const cartsRouter = Router();
import { Router } from "express"
import { cartsDao as cartsApi, productsDao as productsApi} from "../daos/main.js"


// Lista los carritos actualuales
cartsRouter.get('/', async (req, res) => {
  res.json((await cartsApi.readAll()).map(c => c.id))
})

// Crea un carrito y devuelve su id
cartsRouter.post("/", async (req, res) => {
  try {
    const CartCreated = await cartsApi.save();
    if (CartCreated) {
      res.json(CartCreated);
    } else {
      res.send("No se logro crear el carrito");
    }
  } catch (err) {
    res.status(400).send("bad request" + err);
  }
});

// Vacia un carrito y lo elimina
cartsRouter.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  try {
    const cartDeleted = await cartsApi.delete(id);
    res.json(cartDeleted)
  } catch (err) {
    res.status(400).send("bad request" + err);
  }
});

// // Me permite listar todos los productos guardados en el carrito
cartsRouter.get("/:id/productos", async (req, res) => {
  const { id } = req.params;
  try {
    const cart = await cartsApi.read(id);
    res.json(cart.productos)
  } catch (err) {
    res.status(400).send("Bad Request");
  }
});

// Para incorporar productos al carrito por su id de producto
cartsRouter.post("/:id/productos", async (req, res) => {
  try {
    const cartId =req.params.id;
    const cart = await cartsApi.read(cartId)
    const { productId } = req.body;
    const product = await productsApi.read(productId)
    if (cart && product) {
      cart.productos.push(product)
      await cartsApi.update(cart,cartId)
      res.end()
    } else {
      res.status(400).send("Faltan datos para completar la operacion");
    }
  } catch (err) {
    res.status(400).send("bad request" + err);
  }
});

// Eliminar un producto del carrito por su id de carrito y de producto
cartsRouter.delete("/:id/productos/:idProd", async (req, res) => {
  try {
    const cartId =req.params.id;
    const cart = await cartsApi.read(cartId)
    const index = cart.productos.findIndex(p => p.id == req.params.idProd)
    if(index != -1){
      cart.productos.splice(index,1)
      await cartsApi.update(cart,cartId)
    }
    res.end()
  } catch (err) {
    res.status(400).send("bad request" + err);
  }
});

export default cartsRouter