const Marker = require('../models/Marker');

// Handle marker creation
exports.createMarker = async (req, res) => {
  const { name, coordinates, description } = req.body;

  try {
    const newMarker = new Marker({
      name,
      coordinates,
      description,
      createdBy: req.userId,
    });
    await newMarker.save();
    res.status(201).json({ message: 'Marker created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating marker' });
  }
};

// Handle getting all markers
exports.getMarkers = async (req, res) => {
  try {
    const markers = await Marker.find();
    res.status(200).json(markers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching markers' });
  }
};

// Handle marker update
exports.updateMarker = async (req, res) => {
  const { name, coordinates, description } = req.body;
  const { id } = req.params;

  try {
    const updatedMarker = await Marker.findByIdAndUpdate(
      id,
      { name, coordinates, description },
      { new: true }
    );
    res.status(200).json(updatedMarker);
  } catch (error) {
    res.status(500).json({ error: 'Error updating marker' });
  }
};

// Handle marker deletion
exports.deleteMarker = async (req, res) => {
  const { id } = req.params;

  try {
    await Marker.findByIdAndDelete(id);
    res.status(200).json({ message: 'Marker deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting marker' });
  }
};
