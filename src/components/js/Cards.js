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
      frontText: `Explain "Dependency Inversion"`,
      backText: `one should "depend upon abstractions, [not] concretions." In other words--don't extend ArrayList class to get those functions; implement List interface instead.`
    },
    {
      id: 13,
      backgroundColor: `#31587A`,
      frontText: `What is the difference between overloading and overriding?`,
      backText: `Overloading occurs when two or more methods in one class have the same method name but different parameters. Overriding means having two methods with the same method name and parameters (i.e., method signature). One of the methods is in the parent class and the other is in the child class. Overriding changes the BEHAVIOR of the method.`

    },
    {
      id: 14,
      backgroundColor: `#31587A`,
      frontText: `What is the difference between an abstract class and an interface?`,
      backText: `An abstract class can contain non abstract methods and default methods, an interface can only contain method signatures. A class can only extend one abstract class, but it can implement multiple interfaces. An abstract class can have any access modifiers on it's methods and fields, an interface can only be public. Interface fields are public static final. Both can let you use classes of the same supertype.`
    },
    {
      id: 15,
      backgroundColor: `#31587A`,
      frontText: `For Interface and Abstract Class, why would you use one over the other?`,
      backText: `You can implement multiple interfaces but you can only extend one abstract class. Also, you can flesh out methods more fully in an abstract class; Interfaces are for empty methods.`
    },
    {
      id: 16,
      backgroundColor: `#31587A`,
      frontText: `What is the differece between "Collection" and "Collections"`,
      backText: `Collections is an utility class present in java.util. package to define several utility method (like sorting,searching ) for collection object. Collections is a class which has some static methods and that method returns the collection. Collection is an interface; root interface in collection hierarchy`
    },
    {
      id: 17,
      backgroundColor: `#31587A`,
      frontText: `What is an ArrayStoreException? Is it checked or unchecked?`,
      backText: `Thrown to indicate that an attempt has been made to store the wrong type of object into an array of objects. It is an unchecked error that occurs at runtime`
    },
    {
      id: 18,
      backgroundColor: `#31587A`,
      frontText: `Describe JVM, JDK, and JRE`,
      backText: `JDK: Java development kit is the tool necessary to compile, document and package Java programs. (like SDK) JRE: A subset of the Java Development Kit (JDK) for end-users and developers who want to redistribute the runtime environment alone. The Java runtime environment consists of the Java virtual machine, the Java core classes, and supporting files. JVM: The java virtual machine is a specification that provides run-time environment in which java byte code can be executed.`
    },
    {
      id: 19,
      backgroundColor: `yellow`,
      frontText: `What is a HashMap?`,
      backText: `HashMap is a Map based collection class that is used for storing Key & value pairs, does not sort the stored keys and Values TALK ABOUT BUCKETS AND COLLISION`,
    },
    {
      id: 20,
      backgroundColor: `#31587A`,
      frontText: `Why is a HashMap unsorted?`,
      backText: `Two reasons: One, it IS sorted by Java's own internal logic; entries are sorted by hashcode. It is not sorted in any human-readable way Two, HashMaps are SETS of key-value pairs, and sets are (often) unsorted sets of unique values.`
    },
    {
      id: 21,
      backgroundColor: `#31587A`,
      frontText: `What is the difference between Comparable and Comparator?`,
      backText: `Comparable: This interface has one method, compareTo(). Class with objects to be sorted must implement this Comparable interface. Comparator: This interface has two methods, equals() and compare(). Class with objects to be sorted do not need to implement this Comparator interface.`
    },
    {
      id: 22,
      backgroundColor: `#31587A`,
      frontText: `What is Class Loader?`,
      backText: `Part of JVM which is used to load classes and interfaces.`
    },
    {
      id: 23,
      backgroundColor: `#31587A`,
      frontText: `What are the 5 exception keywords? `,
      backText: `Try, Catch, Finally, Throw, Throws`
    },
    {
      id: 24,
      backgroundColor: `#31587A`,
      frontText: `Difference between throw and throws?`,
      backText: `"Throws" goes in signature: void method() throws Exception {} "Throw" goes in method body: void method() { throw new Exception; }`
    },
    {
      id: 25,
      backgroundColor: `#31587A`,
      frontText: `Difference between Final, Finally, Finalize?`,
      backText: `Final: Final is a keyword used to apply restrictions on class, method and variable. Final class can't be inherited, final method can't be overridden and final variable value can't be changed. Finally: Finally is a code block used to place important code, it will be executed whether exception is handled or not. Finalize: Finalize is a method used to perform clean up processing just before object is garbage collected`
    },
    {
      id: 26,
      backgroundColor: `#31587A`,
      frontText: `What is Dictionary in Java?`,
      backText: `The Dictionary class is the abstract parent of any class, such as Hashtable , which maps keys to values. Any non- null object can be used as a key and as a value.`
    },
    {
      id: 27,
      backgroundColor: `#31587A`,
      frontText: `Which collection is the fastest?`,
      backText: `In case of index value pair- arraylist, value- hashset and key value pair- hashmap`
    },
    {
      id: 28,
      backgroundColor: `#31587A`,
      frontText: `What is an instance variable?`,
      backText: `An attribute, or field of an object.`
    },
    {
      id: 29,
      backgroundColor: `#31587A`,
      frontText: `What is the finalize method?`,
      backText: `The method called before garbage collection on any Java object.`
    },
    {
      id: 30,
      backgroundColor: `#31587A`,
      frontText: `What is an access modifier?`,
      backText: `A keyword that describes who or what can access or modifiy the state of an object. Examples: public, private, default, protected`
    },
    {
      id: 31,
      backgroundColor: `#31587A`,
      frontText: `What is an abstract class?`,
      backText: `A class that contains one or more abstract methods, and therefore can never be instantiated. Abstract classes are defined so that other classes can extend them and make them concrete by implementing the abstract methods.`
    },
    {
      id: 32,
      backgroundColor: `#31587A`,
      frontText: `What is an abstract method?`,
      backText: `A method that has no implementation. ex interface methods are abstract`
    },
    {
      id: 33,
      backgroundColor: `#31587A`,
      frontText: `What is an API?`,
      backText: `Application Programming Interface. The specification of how a programmer writing an application accesses the behavior and state of classes and objects.`
    }
  ]
}
