import { useState } from "react";
import { uploadFile } from "../utils/api";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a file.");
      return;
    }
    try {
      await uploadFile(file);
      setError("");
      alert("File uploaded successfully.");
    } catch (err) {
      setError("File upload failed. Please try again.");
    }
  };

  return (
    <div>
      <h3>Upload GeoJSON/KML/TIFF</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default FileUpload;
