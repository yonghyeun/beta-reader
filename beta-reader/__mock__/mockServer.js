import cors from "cors";
import express from "express";

const app = express();
const port = 2222;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Mock server is running at http://localhost:${port}`);
});
