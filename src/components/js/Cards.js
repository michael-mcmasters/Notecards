import Card from "./Card.js";
import "../css/Cards.css";

export default function App() {
  const cards = getCards();

  // Returns data at the given index and returns true if the index is in range.
  // If index is out of range, returns index 0 which has empty properties, and returns false.
  const getNewData = (index) => {
    if (index > 0 && index < cards.length) {
      return [cards[index], true];
    }
    return [cards[0], false];
  }

  const getCardsJSX = () => {
    let cardsArr = [];
    let direction = -150;
    const start = -3, end = 3;
    for (let i = start; i <= end; i++) {
      let index = i;
      if (index > 0 && index < cards.length) {
        cardsArr.push(<Card
          key={index}
          index={cards[index].id}   // Index will change when card moves to opposing side of screen. A negative index means it hides its display. It is important to have negative indexes for calculations to work to get new card properties.
          direction={direction}
          backgroundColor={cards[index].backgroundColor}
          frontText={cards[index].frontText}
          backText={cards[index].backText}
          getNewData={getNewData}
          amountOfData={cards.length}
        />);
      } else {
        // Cards with index out of range will have blank data and will be invisible. (display: none).
        cardsArr.push(<Card
          key={i}
          index={i}
          direction={direction}
          backgroundColor={``}
          frontText={``}
          backText={``}
          getNewData={getNewData}
          amountOfData={cards.length}
        />);
      }

      direction += 50;
    }
    return cardsArr;
  }

  return (
    <div>
      {getCardsJSX()}
    </div>
  )
}

function getCards() {
  return [
    {
      id: 0,
      backgroundColor: `#`,
      frontText: ` `,
      backText: ``
    },
    {
      id: 1,
      backgroundColor: `#31587A`,
      frontText: `What are the 4 principles of Object Oriented Programming?`,
      backText: `A PIE.
      Abstraction
Polymorphism
Inheritance
Encapsulation
`
    },
    {
      id: 2,
      backgroundColor: `#E8525B`,
      frontText: `Explain abstraction`,
      backText: `Abstraction means using simple things to represent complexity. In Java, abstraction
means simple things like objects, classes, and variables represent more complex
underlying code and data. This is important because it lets us avoid repeating the
same work multiple times. It handles complexity by hiding unnecessary details from
the user`
    },
    {
      id: 3,
      backgroundColor: `#E8525B`,
      frontText: `Explain polymorphism`,
      backText: `SAME NAME, MANY FORMS. This Java OOP concept lets programmers use the
same word to mean different things in different contexts. One form of polymorphism
in Java is method overloading. That’s when different meanings are implied by the
code itself. The other form is method overriding. That’s when the different meanings
are implied by the values of the supplied variables.
TWO TYPES:
Runtime , Polymorphism handled during runtime: example (Overriding)
Static , Polymorphism handled in the compiler: example (Overloading)`
    },
    {
      id: 4,
      backgroundColor: `#31587A`,
      frontText: `Explain inheritance
`,
      backText: `This is a special feature of Object Oriented Programming in Java. It lets
programmers create new classes that share some of the attributes of existing
classes. This lets us build on previous work without reinventing the wheel.
 * The ability for a sub class to access the super class's members implicitly through
the keyword 'extends'; Members include methods as well as variables.
`
    },
    {
      id: 5,
      backgroundColor: `#31587A`,
      frontText: `Explain encapsulation`,
      backText: `This is the practice of keeping fields within a class private, then providing access to
them via public methods. It’s a protective barrier that keeps the data and code safe
within the class itself. This way, we can re-use objects like code components or
variables without allowing open access to the data system-wide.`
    },
    {
      id: 6,
      backgroundColor: `#31587A`,
      frontText: `What are the 4 access
modifiers and their access
specifiers`,
      backText: `Public: Class, Package, Subclass, Global, Variable
Protected: Class, Package, Subclass
Default: Class, Package
Private: Class, Variable`
    },
    {
      id: 7,
      backgroundColor: `#31587A`,
      frontText: `What are the 5 SOLID principles?
`,
      backText: `Single Responsibility
Open/Close Principle
Liskov's Substitution Principle
Interface Segregation Principle
Dependency Inversion`
    },
    {
      id: 8,
      backgroundColor: `#31587A`,
      frontText: `Explain "Single Responsibility"`,
      backText: `a class should have only a single responsibility (i.e. changes to only one part of the software's specification should be able to affect the specification of the class).`
    },
    {
      id: 9,
      backgroundColor: `yellow`,
      frontText: `Explain "Open/Close Principle"`,
      backText: `"open for extension, but closed for modification." classes' properties can be inherited and used by subclasses etc, but not altered directly"`
    },
    {
      id: 10,
      backgroundColor: `#31587A`,
      frontText: `Explain "Liskov's Substitution Principle"`,
      backText: `"objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."`
    },
    {
      id: 11,
      backgroundColor: `#31587A`,
      frontText: `Explain "Interface Segregation Principle"`,
      backText: `"many client-specific interfaces are better than one general-purpose interface."
in other words, when you implement an interface, do you want your class flooded
with empty methods you'll never use, or just the few that offer the functionality you
are looking for?`
    },
    {
      id: 12,
      backgroundColor: `#31587A`,
      frontText: `h`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 13,
      backgroundColor: `#31587A`,
      frontText: `i`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 14,
      backgroundColor: `#31587A`,
      frontText: `Qujeue`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 15,
      backgroundColor: `#31587A`,
      frontText: `k`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 16,
      backgroundColor: `#31587A`,
      frontText: `l`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 17,
      backgroundColor: `#31587A`,
      frontText: `m`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 18,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 19,
      backgroundColor: `yellow`,
      frontText: `WHOA!`,
      backText: `yaya ok`
    },
    {
      id: 20,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 21,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 22,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 23,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 24,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 25,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 26,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 27,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 28,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 29,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 30,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 31,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 32,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    },
    {
      id: 33,
      backgroundColor: `#31587A`,
      frontText: `n`,
      backText: `Queues process elements in the order that they were entered rather than the most recent element. This means that they follow the first in first out principle. One end is always used to insert data and the other end is used to remove data. This means that it ensures that the oldest data is processed first. The advantages of this data structure is the dynamic size, that it orders data in the order it was received, and it has a low runtime. The disadvantage of the first out first in principle is that it can only retrieve the oldest element.`,
    }
  ]
}
