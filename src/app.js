import express from 'express';
import resumeRoutes from './routes/resumeRoutes.js';
import cors from 'cors';

const app = express()
app.use(cors({
  origin:[
   'http://localhost:5173/',
   'getresumify.vercel.app'
  ],
  credentials: true
}));


app.use(express.json());
app.use('/api', resumeRoutes);
app.get("/", (req, res) => {
  res.send("AI Resume Builder Backend Running");
});

export default app