import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';
import projectsRoutes from './routes/projects.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

// CORS configuration
app.use(cors({
  origin: process.env.MY_PORTFOLIO_URL || 'http://localhost:5173',
  credentials: true
}));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectsRoutes);


app.get('/api', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Portfolio Backend API is running',
    timestamp: new Date().toISOString()
  });
});


app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'production' ? err.message : 'Something went wrong'
  });
});

app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
