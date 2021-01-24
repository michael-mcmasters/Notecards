import Card from "./Card.js";

export default function App() {
  const cards = [
    {
      id: 0,
      backgroundColor: "#3db10a",
      title: "Linked List",
      text: "A linked list is a linear data structure similar to an array. Each element is a separate object and links to the next object in that list. The first node is called the head and the last node on the list points to null. The main advantage of using linked lists is that nodes can be added or removed easily. Even though we can add nodes without reorganizing the entire data structure it still has many disadvantages. The disadvantages include using more memory then arrays because of the storage of the pointers and that search operations are slow due to nodes being accessed sequentially. ",
    },
    {
      id: 1,
      backgroundColor: "blue",
      title: "Dictionary",
      text: "A dictionary is a general-purpose data structure for storing a group of objects. Dictionaries have a collection of key and value pairs. When presented with a key the dictionary will return the associated value. Main operations of dictionaries are retrieving a value, updating a value, removing a key-value pair and testing for existence of a key. Advantages of this data structure are that it is well structured, clear, and provides good documentation for each object. Disadvantages of this data structure is that it is time consuming to create, it does not provide functional details, and it is not acceptable to many nontechnical users.",
    },
    {
      id: 2,
      backgroundColor: "yellow",
      title: "Stack",
      text: "A stack is an ordered collection of items that follow the last in first out principle. It is only open at one end which means the items are inserted and deleted at one end called top of the stack . This means that the newest elements are at the top and the oldest elements are at the bottom. The three main operations that can be performed on stacks are inserting an item into the stack (push), deleting an item from the stack (pop), and displaying the contents of the stack (peek or top). Advantages of this data structure are that it allows you to control how memory is distributed, it is not easily corrupted and helps you manage data in LIFO order. Disadvantages of this database is that stack memory is limited and that variable storage will be overwritten which sometimes leads to undefined behavior of the function or program.",
    },
  ];

  const getNodeCard = (index) => {
    return <Card
      key={cards[index].id}
      index={cards[index].id}
      backgroundColor={cards[index].backgroundColor}
      text={cards[index].text}
    />
  }

  return (
    <div>
      <div>
        {getNodeCard(0)}
      </div>
      <div>
        {getNodeCard(1)}
      </div>
      <div>
        {getNodeCard(2)}
      </div>
      {/* <div>
        {getText(3)}
      </div> */}
    </div>
  );
}
