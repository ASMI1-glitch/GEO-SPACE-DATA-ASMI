const Shape = require('../models/Shape');

// Handle shape creation
exports.createShape = async (req, res) => {
  const { name, type, coordinates } = req.body;

  try {
    const newShape = new Shape({
      name,
      type,
      coordinates,
      createdBy: req.userId,
    });
    await newShape.save();
    res.status(201).json({ message: 'Shape created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating shape' });
  }
};

// Handle shape retrieval
exports.getShapes = async (req, res) => {
  try {
    const shapes = await Shape.find();
    res.status(200).json(shapes);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching shapes' });
  }
};
