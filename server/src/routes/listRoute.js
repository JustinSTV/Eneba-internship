import { Router } from "express";

import { connectToDatabase, gamesCollection } from "../config/dbConfig.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    await connectToDatabase();
    const lists = await gamesCollection.find({}).toArray();
    res.json(lists);
  } catch (error) {
    console.error("Error fetching lists:", error);
    res.status(500).json({ error: "Failed to fetch lists" });
  }
});

export default router;
