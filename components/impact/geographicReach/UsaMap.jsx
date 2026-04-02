"use client";

import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  { name: "Miami", coordinates: [-80.1918, 25.7617] },
  { name: "Boise", coordinates: [-116.2023, 43.615] },
  { name: "San Bernardino", coordinates: [-117.2898, 34.1083] },
];

const USAMap = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#DDD", outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={6} fill="#00A3AD" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor="middle"
              y={-10}
              style={{
                fontFamily: "system-ui",
                fill: "#5D5A6D",
                fontSize: "10px",
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default USAMap;