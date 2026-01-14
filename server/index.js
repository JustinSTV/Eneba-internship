import express from "express";
import "dotenv/config";
import cors from "cors";

import listRoute from "./src/routes/listRoute.js";
import { connectToDatabase } from "./src/config/dbConfig.js";

const PORT = process.env.SERVER_PORT || 5501;
const app = express();

app.use(cors());
app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

app.use("/api/list", listRoute);

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database", error);
    process.exit(1);
  }
};


startServer();

export default app;