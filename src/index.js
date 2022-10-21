// Configuracion inicial en express de node.js
import express from "express";
import apiRouter from "./routes/api.route.js";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/api/", apiRouter);

app.listen(PORT, () => {
  console.log("Server on " + PORT);
});
