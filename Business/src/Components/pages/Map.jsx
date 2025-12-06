import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import L from "leaflet";
import Navbar from "../Navbar";

const Map = () => {
  const mapRef = useRef(null);
  const routingRef = useRef(null);
  const carMarkerRef = useRef(null);
  const animationFrameId = useRef(null);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const pickupMarker = useRef(null);
  const destinationMarker = useRef(null);

  const carIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61112.png",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const cleanupMap = () => {
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }
    if (animationFrameId.current) {
      clearTimeout(animationFrameId.current);
    }
  };

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center: [-1.286389, 36.817223],
        zoom: 13,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
      }).addTo(mapRef.current);
    }

    return cleanupMap;
  }, []);

  const geocode = async (place) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${place}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length === 0) return null;
      return { lat: Number(data[0].lat), lon: Number(data[0].lon) };
    } catch (error) {
      console.error("Geocoding failed:", error);
      return null;
    }
  };

  const handleTrackOrder = async () => {
    if (!pickup.trim() || !destination.trim()) {
      alert("Please enter both Pickup Point and Destination!");
      return;
    }
    if (!mapRef.current) return;

    const [startLoc, endLoc] = await Promise.all([geocode(pickup), geocode(destination)]);

    if (!startLoc || !endLoc) {
      alert("One or both locations could not be found. Please check the addresses.");
      return;
    }

    const start = L.latLng(startLoc.lat, startLoc.lon);
    const end = L.latLng(endLoc.lat, endLoc.lon);

    if (routingRef.current) mapRef.current.removeControl(routingRef.current);
    if (pickupMarker.current) mapRef.current.removeLayer(pickupMarker.current);
    if (destinationMarker.current) mapRef.current.removeLayer(destinationMarker.current);
    if (carMarkerRef.current) mapRef.current.removeLayer(carMarkerRef.current);
    if (animationFrameId.current) clearTimeout(animationFrameId.current);

    pickupMarker.current = L.marker(start).addTo(mapRef.current);
    destinationMarker.current = L.marker(end, {
      icon: L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [40, 40],
      }),
    }).addTo(mapRef.current);

    mapRef.current.fitBounds(L.latLngBounds(start, end), { padding: [50, 50] });

    routingRef.current = L.Routing.control({
      waypoints: [start, end],
      routeWhileDragging: false,
      show: false,
      addWaypoints: false,
      lineOptions: { styles: [{ color: "blue", weight: 5 }] },
    }).on("routesfound", (e) => {
      const route = e.routes[0];
      const distance = route.summary.totalDistance / 1000;
      const time = route.summary.totalTime / 60;
      const animationSpeed = 50;

      alert(`🚗 Route Ready!\nDistance: ${distance.toFixed(1)} km\nETA: ${time.toFixed(1)} minutes`);

      let coords = route.coordinates;
      let index = 0;

      carMarkerRef.current = L.marker(coords[0], { icon: carIcon }).addTo(mapRef.current);

      const moveCar = () => {
        if (index < coords.length) {
          carMarkerRef.current.setLatLng(coords[index]);
          mapRef.current.panTo(coords[index], { animate: true, duration: animationSpeed / 1000 });
          index++;
          animationFrameId.current = setTimeout(moveCar, animationSpeed);
        }
      };
      moveCar();
    }).addTo(mapRef.current);
  };

  // ---------- Responsive Styles ----------
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    padding: "20px",
    flexWrap: "wrap", // Allows stacking on small screens
  };

  const cardStyle = {
    flex: "1 1 300px", // Grow, shrink, basis
    minWidth: "250px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  };

  const mapStyle = {
    flex: "2 1 500px",
    minHeight: "400px",
    width: "100%", // Ensures responsiveness
    borderRadius: "10px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <Navbar />

      <div style={containerStyle}>
        <div style={cardStyle}>
          <h3>Enter your trip details</h3>

          <input
            type="text"
            placeholder="Pickup Point"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            style={inputStyle}
          />

          <button onClick={handleTrackOrder} style={buttonStyle}>
            Track Order
          </button>
        </div>

        <div id="map" style={mapStyle}></div>
      </div>
    </div>
  );
};

export default Map;
