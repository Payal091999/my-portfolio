const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Course Schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  progress: { type: Number, required: true, min: 0, max: 100 },
  status: { type: String, required: true, enum: ['In Progress', 'Completed'] },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

// Admin authentication middleware
const ADMIN_PASSWORD = 'admin123'; // Change this in production

const authenticateAdmin = (req, res, next) => {
  const { password } = req.headers;
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

// Routes
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses', error: err.message });
  }
});

app.post('/courses', authenticateAdmin, async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: 'Error creating course', error: err.message });
  }
});

app.put('/courses/:id', authenticateAdmin, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(400).json({ message: 'Error updating course', error: err.message });
  }
});

app.delete('/courses/:id', authenticateAdmin, async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting course', error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
