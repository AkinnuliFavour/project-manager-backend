import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});

export default app;
