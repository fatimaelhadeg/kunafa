import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const LocalMap = () => {
  const position = [30.4278, -9.5981]; // Agadir example

  return (
    <div className="w-full h-[400px] md:h-[600px] rounded-xl shadow-md">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={position}>
          <Popup>BaklaVa's Kitchen — Agadir</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocalMap;
