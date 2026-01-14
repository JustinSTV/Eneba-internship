import express from "express";
import "dotenv/config";
import cors from "cors";

import listRoute from "./src/routes/listRoute.js";
import { connectToDatabase } from "./src/config/dbConfig.js";

const PORT = process.env.SERVER_PORT || 5501;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/list", listRoute);

// const startServer = async () => {
//   try {
//     await connectToDatabase();
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error("Failed to connect to database", error);
//     process.exit(1);
//   }
// };


// startServer();

connectToDatabase().catch(err => console.error("Database connection error:", err));

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.SERVER_PORT || 5501;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;