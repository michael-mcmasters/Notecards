import React from "react";
import "../css/Card.css";

export default function Card(props) {
  return (
    <div>
      <div className="flip-card">
        <div className="flip-card-inner" style={{ backgroundColor: props.backgroundColor }}>
          <div className="flip-card-front" style={{ backgroundColor: props.backgroundColor }}>
            <h1>{props.text}</h1>
          </div>
          <div className="flip-card-back" style={{ backgroundColor: props.backgroundColor }}>
            <h1>John Doe</h1>
            <p>Architect and Engineer</p>
            <p>We love that guy</p>
          </div>
        </div>
      </div>
    </div>
  );
}