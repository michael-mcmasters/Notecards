import { useState, useEffect } from "react";
import Card from "./Card.js";
import "../css/Cards.css";

export default function App() {
  const cards = getCards();

  // Returns an array of cards next to the card with the given index. Makes sure the indexed card is at the center of the page.
  // If there are no cards beside the given card, it creates dummy cards as a placeholder.
  // const getNoteCards = (index) => {
  //   let cardsArr = [];

  //   //console.log(index)
  //   let direction = -150;
  //   for (let ind = index; ind <= index + 7; ind++) {
  //     let i = index;
  //     if (i < 0 || i > cards.length - 1) {              // Use dummy card if index is out of range (meaning there are no cards beside this card).
  //       i = 9;
  //     }


  //     cardsArr.push(<Card
  //       key={i}
  //       index={cards[i].id}                         // Flip animation needs index. Will not work if you use key as index.
  //       direction={direction}
  //       backgroundColor={cards[i].backgroundColor}
  //       frontText={cards[i].frontText}
  //       backText={cards[i].backText}
  //     />);

  //     direction += 50;
  //   }
  //   return cardsArr;
  // }

  // Tuple. First value is the new card.
  // Second value returns true if the new card exists or false if it does not exist (meaning the index is out of range).
  const getNewData = (index) => {
    if (index > 0 && index < cards.length) {
      return [cards[index], true];
    }
    return [cards[0], false];
  }

  // Longer way of doing it without a for-loop
  return (
    <div className="row">
      <Card
        key={0}
        index={cards[0].id}   // Flip animation needs index. Will not work if you use key as index.
        direction={-150}
        backgroundColor={cards[0].backgroundColor}
        frontText={cards[0].frontText}
        backText={cards[0].backText}
        getNewData={getNewData}
        numOfCards={cards.length}
      />
      <Card
        key={1}
        index={cards[1].id}   // Flip animation needs index. Will not work if you use key as index.
        direction={-100}
        backgroundColor={cards[1].backgroundColor}
        frontText={cards[1].frontText}
        backText={cards[1].backText}
        getNewData={getNewData}
        numOfCards={cards.length}
      />
      <Card
        key={2}
        index={cards[2].id}   // Flip animation needs index. Will not work if you use key as index.
        direction={-50}
        backgroundColor={cards[2].backgroundColor}
        frontText={cards[2].frontText}
        backText={cards[2].backText}
        getNewData={getNewData}
        numOfCards={cards.length}
      />
      <Card
        key={3}
        index={cards[3].id}   // Flip animation needs index. Will not work if you use key as index.
        direction={0}
        backgroundColor={"blue"}
        frontText={cards[3].frontText}
        backText={cards[3].backText}
        getNewData={getNewData}
        numOfCards={cards.length}
      />
      <Card
        key={4}
        index={cards[4].id}   // Flip animation needs index. Will not work if you use key as index.
        direction={50}
        backgroundColor={cards[4].backgroundColor}
        frontText={cards[4].frontText}
        backText={cards[4].backText}
        getNewData={getNewData}
        numOfCards={cards.length}
      />
      <Card
        key={5}
        index={cards[5].id}   // Flip animation needs index. Will not work if you use key as index.
        direction={100}
        backgroundColor={cards[5].backgroundColor}
        frontText={cards[5].frontText}
        backText={cards[5].backText}
        getNewData={getNewData}
        numOfCards={cards.length}
      />
      <Card
        key={6}
        index={cards[6].id}   // Flip animation needs index. Will not work if you use key as index.
        direction={150}
        backgroundColor={cards[6].backgroundColor}
        frontText={cards[6].frontText}
        backText={cards[6].backText}
        getNewData={getNewData}
        numOfCards={cards.length}
      />
    </div>
  )
}

function getCards() {
  return [
    {
      id: 0,
      backgroundColor: "#",
      frontText: " ",
      backText: ""
    },
    {
      id: 1,
      backgroundColor: "#31587A",
      frontText: "Linked List",
      backText: "A linked list is a linear data structure similar to an array. Each element is a separate object and links to the next object in that list. The first node is called the head and the last node on the list points to null. The main advantage of using linked lists is that nodes can be added or removed easily. Even though we can add nodes without reorganizing the entire data structure it still has many disadvantages. The disadvantages include using more memory then arrays because of the storage of the pointers and that search operations are slow due to nodes being accessed sequentially. ",
    },
    {
      id: 2,
      backgroundColor: "#E8525B",
      frontText: "Dictionary",
      backText: "A dictionary is a general-purpose data structure for storing a group of objects. Dictionaries have a collection of key and value pairs. When presented with a key the dictionary will return the associated value. Main operations of dictionaries are retrieving a value, updating a value, removing a key-value pair and testing for existence of a key. Advantages of this data structure are that it is well structured, clear, and provides good documentation for each object. Disadvantages of this data structure is that it is time consuming to create, it does not provide functional details, and it is not acceptable to many nontechnical users.",
    },
    {
      id: 3,
      backgroundColor: "#E8525B",
      frontText: "Stack",
      backText: "A stack is an ordered collection of items that follow the last in first out principle. It is only open at one end which means the items are inserted and deleted at one end called top of the stack . This means that the newest elements are at the top and the oldest elements are at the bottom. The three main operations that can be performed on stacks are inserting an item into the stack (push), deleting an item from the stack (pop), and displaying the contents of the stack (peek or top). Advantages of this data structure are that it allows you to control how memory is distributed, it is not easily corrupted and helps you manage data in LIFO order. Disadvantages of this database is that stack memory is limited and that variable storage will be overwritten which sometimes leads to undefined behavior of the function or program.",
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
      frontText: "A",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
    {
      id: 6,
      backgroundColor: "#31587A",
      frontText: "B",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
    {
      id: 7,
      backgroundColor: "#31587A",
      frontText: "c",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
    {
      id: 8,
      backgroundColor: "#31587A",
      frontText: "d",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
    {
      id: 9,
      backgroundColor: "yellow",
      frontText: "last one!",
      backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
    },
  ]
}
  // {
  //   id: 10,
  //   backgroundColor: "#31587A",
  //   frontText: "f",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 11,
  //   backgroundColor: "#31587A",
  //   frontText: "g",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 12,
  //   backgroundColor: "#31587A",
  //   frontText: "h",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 13,
  //   backgroundColor: "#31587A",
  //   frontText: "i",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 14,
  //   backgroundColor: "#31587A",
  //   frontText: "Qujeue",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 15,
  //   backgroundColor: "#31587A",
  //   frontText: "k",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 16,
  //   backgroundColor: "#31587A",
  //   frontText: "l",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 17,
  //   backgroundColor: "#31587A",
  //   frontText: "m",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 18,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 19,
  //   backgroundColor: "yellow",
  //   frontText: "WHOA!",
  //   backText: "yaya ok"
  // },
  // {
  //   id: 20,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 21,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 22,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 23,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 24,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 25,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 26,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 27,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 28,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 29,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 30,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 31,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 32,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // },
  // {
  //   id: 33,
  //   backgroundColor: "#31587A",
  //   frontText: "n",
  //   backText: "Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.",
  // }
  //]
