import { useEffect, useState } from "react";
import Card from "./Card.js";
import "../css/Cards.css";

export default function App() {
  const [cardIndex, setCardIndex] = useState(3);
  const [flipped, setFlipped] = useState(false);

  const cards = [
    {
      id: 0,
      backgroundColor: "#31587A",
      frontText: "Linked List",
      backText: "A linked list is a linear data structure similar to an array. Each element is a separate object and links to the next object in that list. The first node is called the head and the last node on the list points to null. The main advantage of using linked lists is that nodes can be added or removed easily. Even though we can add nodes without reorganizing the entire data structure it still has many disadvantages. The disadvantages include using more memory then arrays because of the storage of the pointers and that search operations are slow due to nodes being accessed sequentially. ",
    },
    {
      id: 1,
      backgroundColor: "#E8525B",
      frontText: "Dictionary",
      backText: "A dictionary is a general-purpose data structure for storing a group of objects. Dictionaries have a collection of key and value pairs. When presented with a key the dictionary will return the associated value. Main operations of dictionaries are retrieving a value, updating a value, removing a key-value pair and testing for existence of a key. Advantages of this data structure are that it is well structured, clear, and provides good documentation for each object. Disadvantages of this data structure is that it is time consuming to create, it does not provide functional details, and it is not acceptable to many nontechnical users.",
    },
    {
      id: 2,
      backgroundColor: "#E8525B",
      frontText: "Stack",
      backText: "A stack is an ordered collection of items that follow the last in first out principle. It is only open at one end which means the items are inserted and deleted at one end called top of the stack . This means that the newest elements are at the top and the oldest elements are at the bottom. The three main operations that can be performed on stacks are inserting an item into the stack (push), deleting an item from the stack (pop), and displaying the contents of the stack (peek or top). Advantages of this data structure are that it allows you to control how memory is distributed, it is not easily corrupted and helps you manage data in LIFO order. Disadvantages of this database is that stack memory is limited and that variable storage will be overwritten which sometimes leads to undefined behavior of the function or program.",
    },
    {
      id: 3,
      backgroundColor: "#31587A",
      frontText: "Queue",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
    {
      id: 4,
      backgroundColor: "#E8525B",
      frontText: "Dictionary",
      backText: "A dictionary is a general-purpose data structure for storing a group of objects. Dictionaries have a collection of key and value pairs. When presented with a key the dictionary will return the associated value. Main operations of dictionaries are retrieving a value, updating a value, removing a key-value pair and testing for existence of a key. Advantages of this data structure are that it is well structured, clear, and provides good documentation for each object. Disadvantages of this data structure is that it is time consuming to create, it does not provide functional details, and it is not acceptable to many nontechnical users.",
    },
    {
      id: 4,

      backgroundColor: "#31587A",
      frontText: "Queue",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
    {
      id: 5,
      backgroundColor: "#31587A",
      frontText: "Queue",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
    {
      id: 6,
      backgroundColor: "#31587A",
      frontText: "Linked List",
      backText: "A linked list is a linear data structure similar to an array. Each element is a separate object and links to the next object in that list. The first node is called the head and the last node on the list points to null. The main advantage of using linked lists is that nodes can be added or removed easily. Even though we can add nodes without reorganizing the entire data structure it still has many disadvantages. The disadvantages include using more memory then arrays because of the storage of the pointers and that search operations are slow due to nodes being accessed sequentially. ",
    },
    {
      id: 7,
      backgroundColor: "#31587A",
      frontText: "Queue",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
  ];

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case " ":                   // space key
        setFlipped(!flipped);
        break;
      case "ArrowLeft":
        if (cardIndex >= 2) setCardIndex(cardIndex - 1);
        break;
      case "ArrowRight":
        if (cardIndex <= cards.length - 3) setCardIndex(cardIndex + 1);
        break;
    }
  };

  // Pass the index of the notecard you want.
  // const getNoteCard = (i, position) => {
  //   if (i < 0 || i > cards.length - 1) return "";   // edge case: make sure index is in range

  //   return <Card
  //     key={cards[i].id}
  //     index={cards[i].id}   // Flip animation needs index. Will not work if you use key as index.
  //     position={position}
  //     backgroundColor={cards[i].backgroundColor}
  //     frontText={cards[i].frontText}
  //     backText={cards[i].backText}
  //   />
  // }

  // const getIndex = (index) => {
  //   if (i < 0 || i > cards.length - 1) return "";   // edge case: make sure index is in range
  // }

  const cardss = () => {
    const i = cardIndex;
    return (
      // <div className="row">
      //   {getNoteCard(cardIndex - 1, "left")}
      //   {getNoteCard(cardIndex, "center")}
      //   {getNoteCard(cardIndex + 1, "right")}
      // </div>
      <div className="row">
        <Card
          key={cardIndex - 2}
          index={cardIndex - 2}   // Flip animation needs index. Will not work if you use key as index.
          position={"-40vw"}
          backgroundColor={cards[i - 2].backgroundColor}
          frontText={cards[i - 2].frontText}
          backText={cards[i - 2].backText}
        />
        <Card
          key={cardIndex - 1}
          index={cardIndex - 1}   // Flip animation needs index. Will not work if you use key as index.
          position={"-20vw"}
          backgroundColor={cards[i - 1].backgroundColor}
          frontText={cards[i - 1].frontText}
          backText={cards[i - 1].backText}
        />
        <Card
          key={cardIndex}
          index={cardIndex}   // Flip animation needs index. Will not work if you use key as index.
          position={"0vw"}
          backgroundColor={cards[i].backgroundColor}
          frontText={cards[i].frontText}
          backText={cards[i].backText}
        />
        <Card
          key={cardIndex + 1}
          index={cardIndex + 1}   // Flip animation needs index. Will not work if you use key as index.
          position={"20vw"}
          backgroundColor={cards[i + 1].backgroundColor}
          frontText={cards[i + 1].frontText}
          backText={cards[i + 1].backText}
        />
        <Card
          key={cardIndex + 2}
          index={cardIndex + 2}   // Flip animation needs index. Will not work if you use key as index.
          position={"20vw"}
          backgroundColor={cards[i + 2].backgroundColor}
          frontText={cards[i + 2].frontText}
          backText={cards[i + 2].backText}
        />
      </div>

    )
  }

  return (
    <div>
      {cardss(cardIndex)}
    </div>
  );
}
