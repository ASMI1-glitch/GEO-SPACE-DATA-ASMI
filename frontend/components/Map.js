import { useState, useEffect } from 'react';
import axios from 'axios';

const Map = ({ address }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [mapImage, setMapImage] = useState(null);
  const [searchAddress, setSearchAddress] = useState(address);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchAddress) {
      setLoading(true);
      // Fetch the geolocation of the provided address
      axios
        .get('https://nominatim.openstreetmap.org/search', {
          params: {
            q: searchAddress,
            format: 'json',
            limit: 1,
          },
        })
        .then((response) => {
          const location = response.data[0];
          if (location) {
            const { lat, lon } = location;
            setCoordinates({ lat: parseFloat(lat), lon: parseFloat(lon) });
            // Ensure the static map URL is properly formed
            const mapUrl = `https://staticmap.openstreetmap.org/staticmap?center=${lat},${lon}&zoom=14&size=600x400&markers=${lat},${lon}&format=png&layer=mapnik`;
            setMapImage(mapUrl);
          } else {
            console.error('Address not found');
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching geocoding data:', error);
          setLoading(false);
        });
    }
  }, [searchAddress]);

  const handleSearchChange = (e) => {
    setSearchAddress(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchAddress(searchAddress);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchAddress}
          onChange={handleSearchChange}
          placeholder="Search for an address"
        />
        <button type="submit">Search</button>
      </form>

      {loading ? (
        <p>Loading coordinates and map...</p>
      ) : (
        <div>
          {coordinates && (
            <div>
              <h2>Coordinates:</h2>
              <p>Latitude: {coordinates.lat}</p>
              <p>Longitude: {coordinates.lon}</p>
            </div>
          )}
          {mapImage && (
            <div>
              <h2>Map:</h2>
              <img 
                src={mapImage} 
                alt="Map" 
                style={{ width: '100%', height: 'auto', border: '1px solid #ccc' }} // Add style to ensure image is visible
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Map;
