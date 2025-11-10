import express from "express";
import morgan from "morgan";
import colors from "colors";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor CashTrackr funcionando correctamente 🚀");
});

export default app;
