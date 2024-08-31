import express, { Request, Response, NextFunction } from "express";

import articalRoutes from "./controllers/article";

const app = express();
const port = process.env.PORT || 8080;

app.get('/health', (req: Request, res: Response) => {
    res.json({
        status: 200,
        content: "working fine."
    });
});

app.use('/article', articalRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Global Error Handler:', err.message);
    res.status(err.statusCode || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
