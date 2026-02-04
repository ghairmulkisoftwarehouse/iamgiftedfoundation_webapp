// ButtonClipLoader.jsx
import "./buttonClipLoader.css";

export default function ButtonClipLoader({ size = 16, color = "#000" }) {
  return (
    <div
      className="loader"
      style={{
     
        background: color, // dynamic color
      }}
    ></div>
  );
}
