import Card from "./Card.js";

export default function App() {
  const cards = [
    {
      id: 0,
      backgroundColor: "#3db10a",
      text: "Liskov Substituion Principle",
    },
    {
      id: 1,
      backgroundColor: "blue",
      text: "Interface Segregation Principle",
    },
    {
      id: 2,
      backgroundColor: "yellow",
      text: "Dependency Inversion",
    },
  ];

  return (
    <div>
      {cards.map(c => (
        <Card
          key={c.id}
          backgroundColor={c.backgroundColor}
          text={c.text}
        ></Card>
      ))}
    </div>
  );
}
