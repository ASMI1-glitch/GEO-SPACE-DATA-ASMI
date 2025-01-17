const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const fileRoutes = require('./routes/file');
const shapeRoutes = require('./routes/shape');
const markerRoutes = require('./routes/marker');
const authMiddleware = require('./middlewares/authMiddleware');

dotenv.config();

// Initialize Express app
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/shapes', shapeRoutes);
app.use('/api/markers', markerRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
