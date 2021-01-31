import { useState } from "react";
import Card from "./Card.js";
import "../css/Cards.css";

export default function App() {
  const [cardIndex, setCardIndex] = useState(1);

  const cards = [
    {
      id: -1,
      backgroundColor: "#31587A",
      frontText: "Dummy Card ",
      backText: "This is a dummy card, meaning the index was out of range because there is no card here. So this is a placeholder so that the card carousel will still work",
    },
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
      frontText: "Queue",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
    {
      id: 7,
      backgroundColor: "#31587A",
      frontText: "Queue",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
  ];

  // Returns an array of cards next to the card with the given index. Makes sure the indexed card is at the center of the page.
  // If there are no cards beside the given card, it creates dummy cards as a placeholder.
  const getNoteCards = (index) => {
    let cardsArr = [];

    let direction = -150;
    for (let i = index - 1; i <= index + 5; i++) {
      if (i < 0 || i > cards.length) {              // Use dummy card if index is out of range (meaning there are no cards beside this card).
        i = 0;
      }
      cardsArr.push(<Card
        key={i}
        index={cards[i].id}                         // Flip animation needs index. Will not work if you use key as index.
        direction={direction}
        backgroundColor={cards[i].backgroundColor}
        frontText={cards[i].frontText}
        backText={cards[i].backText}
      />);

      direction += 50;
    }
    return cardsArr;
  }

  return (
    <div>
      {getNoteCards(1)}
    </div>
  );
}





  // // Longer way of doing it without a for-loop
  // const getCards = () => {
  //   const i = cardIndex;
  //   return (
  //     <div className="row">
  //       <Card
  //         key={-3}
  //         index={cards[i].id}   // Flip animation needs index. Will not work if you use key as index.
  //         direction={-150}
  //         backgroundColor={cards[i].backgroundColor}
  //         frontText={cards[i].frontText}
  //         backText={cards[i].backText}
  //       />
  //       <Card
  //         key={-2}
  //         index={cards[i].id}   // Flip animation needs index. Will not work if you use key as index.
  //         direction={-100}
  //         backgroundColor={cards[i].backgroundColor}
  //         frontText={cards[i].frontText}
  //         backText={cards[i].backText}
  //       />
  //       <Card
  //         key={-1}
  //         index={cards[i].id}   // Flip animation needs index. Will not work if you use key as index.
  //         direction={-50}
  //         backgroundColor={cards[i].backgroundColor}
  //         frontText={cards[i].frontText}
  //         backText={cards[i].backText}
  //       />
  //       <Card
  //         key={0}
  //         index={cards[i].id}   // Flip animation needs index. Will not work if you use key as index.
  //         direction={0}
  //         backgroundColor={"blue"}
  //         frontText={cards[i].frontText}
  //         backText={cards[i].backText}
  //       />
  //       <Card
  //         key={1}
  //         index={cards[i].id}   // Flip animation needs index. Will not work if you use key as index.
  //         direction={50}
  //         backgroundColor={cards[i].backgroundColor}
  //         frontText={cards[i].frontText}
  //         backText={cards[i].backText}
  //       />
  //       <Card
  //         key={2}
  //         index={cards[i].id}   // Flip animation needs index. Will not work if you use key as index.
  //         direction={100}
  //         backgroundColor={cards[i].backgroundColor}
  //         frontText={cards[i].frontText}
  //         backText={cards[i].backText}
  //       />
  //       <Card
  //         key={3}
  //         index={cards[i].id}   // Flip animation needs index. Will not work if you use key as index.
  //         direction={150}
  //         backgroundColor={cards[i].backgroundColor}
  //         frontText={cards[i].frontText}
  //         backText={cards[i].backText}
  //       />
  //     </div>
  //   )
  // }
