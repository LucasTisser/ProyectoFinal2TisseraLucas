import { Router } from "express";
import productsRouter from "./productos.route.js";
import cartsRouter from "./carritos.route.js";
const apiRouter = Router();

// Rutas alojadas en routers
apiRouter.use("/productos", productsRouter);
apiRouter.use("/carritos", cartsRouter);

// apiRouter
export default apiRouter;
