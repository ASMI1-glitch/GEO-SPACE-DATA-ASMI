const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) throw new Error("Login failed");
  return response.json();
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) throw new Error("Registration failed");
  return response.json();
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) throw new Error("File upload failed");
  return response.json();
};

export const getGeoJSONData = async () => {
  const response = await fetch(`${API_URL}/data/geojson`);
  if (!response.ok) throw new Error("Failed to fetch GeoJSON data");
  return response.json();
};
