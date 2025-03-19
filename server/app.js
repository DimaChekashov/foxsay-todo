import express from 'express';
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());

app.use("/api", todoRoutes);

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		error: "Internal Server Error"
	})
});

export default app;
