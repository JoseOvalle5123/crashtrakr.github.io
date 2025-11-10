import app from "./server";
import colors from "colors";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(colors.cyan(`💸 Servidor ejecutándose en el puerto ${PORT}`));
});
