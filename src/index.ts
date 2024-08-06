import express from "express";
import accountRoutes from "./routes/accountRoutes";
import managerRoutes from "./routes/managerRoutes";
import paymentRoutes from "./routes/paymentRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", accountRoutes);
app.use("/api", managerRoutes);
app.use("/api", paymentRoutes);


app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});