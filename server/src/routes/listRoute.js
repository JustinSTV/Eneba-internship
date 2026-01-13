import { Router } from "express";

import { connectToDatabase, gamesCollection } from "../config/dbConfig.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const lists = await gamesCollection.find({}).toArray();
    res.json(lists);
  } catch (error) {
    console.error("Error fetching lists:", error);
    res.status(500).json({ error: "Failed to fetch lists" });
  }
});
router.get("/search", async (req, res) => {
  try {
    const { search } = req.query;

    if (!search) {
      const allLists = await gamesCollection.find({}).toArray();
      return res.json(allLists);
    }

    const lists = await gamesCollection.find({
      title: { $regex: search, $options: "i" },
    }).toArray();
    res.json(lists);
  } catch (error) {
    console.error("Error fetching lists:", error);
    res.status(500).json({ error: "Failed to fetch lists" });
  }
});

export default router;
