const File = require('../models/File');

// Handle file upload
exports.uploadFile = async (req, res) => {
  const { filename, fileType, filepath } = req.body;

  try {
    const newFile = new File({
      filename,
      fileType,
      filepath,
      uploadedBy: req.userId,
    });
    await newFile.save();
    res.status(201).json({ message: 'File uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading file' });
  }
};

// Handle file retrieval
exports.getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching files' });
  }
};
