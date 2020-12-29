import react from "react";
import "../css/Card.css";

export default function Card(props) {
  return (
    <h1 className="card" style={{ backgroundColor: props.backgroundColor }}>{props.text}</h1>
  );
}