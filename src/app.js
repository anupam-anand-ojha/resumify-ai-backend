import express from 'express'
import resumeRoutes from './routes/resumeRoutes.js'

const app = express()

app.use(express.json());
app.use('/api', resumeRoutes);
app.get("/", (req, res) => {
  res.send("AI Resume Builder Backend Running");
});

export default app