import { Router } from "express";

import { gamesCollection } from "../config/dbConfig.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = { title: { $regex: search, $options: "i" } };
    }

    const lists = await gamesCollection.find(query).toArray();
    res.json(lists);
  } catch (error) {
    console.error("Error fetching lists:", error);
    res.status(500).json({ error: "Failed to fetch lists" });
  }
});

export default router;
