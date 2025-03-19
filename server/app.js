import express from 'express';
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
	res.header('Access-Control-Allow-Methods', "GET, POST, PATCH, DELETE");
	res.header("Access-Control-Allow-Header", "Content-Type, Authorization");
	next();
})

app.use(express.json());

app.use("/api", todoRoutes);

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({
		error: "Internal Server Error"
	})
});

export default app;
