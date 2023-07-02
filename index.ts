import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 5001;

app.get("/", (req: Request, res: Response) => {
  res.send("Typescript + Node.js + Express Server");
});

app.get("/path1", (req: Request, res: Response) => {
  res.json({ id: "권광재", name: "김치" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
