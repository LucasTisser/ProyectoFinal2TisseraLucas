let productsDao;
let cartsDao;
import * as dotenv from 'dotenv'
dotenv.config()
console.log(dotenv.config())
switch (process.env.PERS) {
  case "json":
    console.log("Metodo JSON")
    const { default: ProductosDaoArchivo } = await import(
      "./productos/ProductosDaoArchivo.js"
    );
    const { default: CarritosDaoArchivo } = await import(
      "./carritos/CarritosDaoArchivo.js"
    );

    productsDao = new ProductosDaoArchivo();
    cartsDao = new CarritosDaoArchivo();
    break;
  case "firebase":
    const { default: ProductosDaoFirebase } = await import(
      "./productos/ProductosDaoFirebase.js"
    );
    const { default: CarritosDaoFirebase } = await import(
      "./carritos/CarritosDaoFirebase.js"
    );

    productsDao = new ProductosDaoFirebase();
    cartsDao = new CarritosDaoFirebase();
    break;
  case "mongodb":
    console.log("metodo MONGO")
    const { default: ProductosDaoMongoDb } = await import(
      "./productos/ProductosDaoMongoDb.js"
    );
    const { default: CarritosDaoMongoDb } = await import(
      "./carritos/CarritosDaoMongoDb.js"
    );

    productsDao = new ProductosDaoMongoDb();
    cartsDao = new CarritosDaoMongoDb();
    break;
  case "mariadb":
    const { default: ProductosDaoMariaDb } = await import(
      "./productos/ProductosDaoMariaDb.js"
    );
    const { default: CarritosDaoMariaDb } = await import(
      "./carritos/CarritosDaoMariaDb.js"
    );

    productsDao = new ProductosDaoMariaDb();
    cartsDao = new CarritosDaoMariaDb();
    break;
  case "sqlite3":
    const { default: ProductosDaoSQLite3 } = await import(
      "./productos/ProductosDaoSQLite3.js"
    );
    const { default: CarritosDaoSQLite3 } = await import(
      "./carritos/CarritosDaoSQLite3.js"
    );

    productsDao = new ProductosDaoSQLite3();
    cartsDao = new CarritosDaoSQLite3();
    break;
  default:
    console.log("Metodo Default")
    const { default: ProductosDaoMem } = await import(
      "./productos/ProductosDaoMemoria.js"
    );
    const { default: CarritosDaoMem } = await import(
      "./carritos/CarritosDaoMemoria.js"
    );
    productsDao = new ProductosDaoMem();
    cartsDao = new CarritosDaoMem();
    break;
}

export { productsDao, cartsDao };
