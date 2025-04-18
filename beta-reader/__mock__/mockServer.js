import cors from "cors";
import express from "express";

import { postsSuccessResponse } from "./post/data.js";

const app = express();
const port = 2222;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.use(cors());
app.use(express.json());

app.get("/posts", async (_, res) => {
  await delay(1000);
  res.json(postsSuccessResponse);
});

app.listen(port, () => {
  console.log(`Mock server is running at http://localhost:${port}`);
});
