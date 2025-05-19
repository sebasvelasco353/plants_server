import express from 'express';
import plantsRoutes from './routes/plantsRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(express.json());

// routes
app.use('/api/plants', plantsRoutes);

// Error Handling
app.use(errorHandler);

export default app;
