import react from "react";
import "../css/Card.css";

export default function Card(props) {
  return (
    <h1 className="card">{props.text}</h1>
  );
}