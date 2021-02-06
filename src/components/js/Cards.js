import Card from "./Card.js";

import "../css/Cards.css";

export default function App() {
  const cards = getJSONData();

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
      if (i > 0 && i < cards.length) {
        cardsArr.push(<Card
          key={i}
          index={i}   // Index will change when card moves to opposing side of screen. A negative index means it hides its display. It is important to have negative indexes for calculations to work to get new card properties.
          direction={direction}
          backgroundColor={cards[i].backgroundColor}
          frontText={cards[i].frontText}
          backText={cards[i].backText}
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

function getJSONData() {
  return [
    {
      backgroundColor: `#`,
      frontText: ` `,
      backText: ``
    },
    {
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
      backgroundColor: `#E8525B`,
      frontText: `Explain abstraction`,
      backText: `Abstraction means using simple things to represent complexity. In Java, abstraction
means simple things like objects, classes, and variables represent more complex
underlying code and data. This is important because it lets us avoid repeating the
same work multiple times. It handles complexity by hiding unnecessary details from
the user`
    },
    {
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
      backgroundColor: `#31587A`,
      frontText: `Explain encapsulation`,
      backText: `This is the practice of keeping fields within a class private, then providing access to
them via public methods. It’s a protective barrier that keeps the data and code safe
within the class itself. This way, we can re-use objects like code components or
variables without allowing open access to the data system-wide.`
    },
    {
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
      backgroundColor: `#31587A`,
      frontText: `Explain "Single Responsibility"`,
      backText: `a class should have only a single responsibility (i.e. changes to only one part of the software's specification should be able to affect the specification of the class).`
    },
    {
      backgroundColor: `yellow`,
      frontText: `Explain "Open/Close Principle"`,
      backText: `"open for extension, but closed for modification." classes' properties can be inherited and used by subclasses etc, but not altered directly"`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Explain "Liskov's Substitution Principle"`,
      backText: `"objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program."`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Explain "Interface Segregation Principle"`,
      backText: `"many client-specific interfaces are better than one general-purpose interface." in other words, when you implement an interface, do you want your class flooded with empty methods you'll never use, or just the few that offer the functionality you are looking for?`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Explain "Dependency Inversion"`,
      backText: `one should "depend upon abstractions, [not] concretions." In other words--don't extend ArrayList class to get those functions; implement List interface instead.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is the difference between overloading and overriding?`,
      backText: `Overloading occurs when two or more methods in one class have the same method name but different parameters. Overriding means having two methods with the same method name and parameters (i.e., method signature). One of the methods is in the parent class and the other is in the child class. Overriding changes the BEHAVIOR of the method.`

    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is the difference between an abstract class and an interface?`,
      backText: `An abstract class can contain non abstract methods and default methods, an interface can only contain method signatures. A class can only extend one abstract class, but it can implement multiple interfaces. An abstract class can have any access modifiers on it's methods and fields, an interface can only be public. Interface fields are public static final. Both can let you use classes of the same supertype.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `For Interface and Abstract Class, why would you use one over the other?`,
      backText: `You can implement multiple interfaces but you can only extend one abstract class. Also, you can flesh out methods more fully in an abstract class; Interfaces are for empty methods.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is the differece between "Collection" and "Collections"`,
      backText: `Collections is an utility class present in java.util. package to define several utility method (like sorting,searching ) for collection object. Collections is a class which has some static methods and that method returns the collection. Collection is an interface; root interface in collection hierarchy`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an ArrayStoreException? Is it checked or unchecked?`,
      backText: `Thrown to indicate that an attempt has been made to store the wrong type of object into an array of objects. It is an unchecked error that occurs at runtime`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Describe JVM, JDK, and JRE`,
      backText: `JDK: Java development kit is the tool necessary to compile, document and package Java programs. (like SDK) JRE: A subset of the Java Development Kit (JDK) for end-users and developers who want to redistribute the runtime environment alone. The Java runtime environment consists of the Java virtual machine, the Java core classes, and supporting files. JVM: The java virtual machine is a specification that provides run-time environment in which java byte code can be executed.`
    },
    {
      backgroundColor: `yellow`,
      frontText: `What is a HashMap?`,
      backText: `HashMap is a Map based collection class that is used for storing Key & value pairs, does not sort the stored keys and Values TALK ABOUT BUCKETS AND COLLISION`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Why is a HashMap unsorted?`,
      backText: `Two reasons: One, it IS sorted by Java's own internal logic; entries are sorted by hashcode. It is not sorted in any human-readable way Two, HashMaps are SETS of key-value pairs, and sets are (often) unsorted sets of unique values.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is the difference between Comparable and Comparator?`,
      backText: `Comparable: This interface has one method, compareTo(). Class with objects to be sorted must implement this Comparable interface. Comparator: This interface has two methods, equals() and compare(). Class with objects to be sorted do not need to implement this Comparator interface.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is Class Loader?`,
      backText: `Part of JVM which is used to load classes and interfaces.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What are the 5 exception keywords? `,
      backText: `Try, Catch, Finally, Throw, Throws`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Difference between throw and throws?`,
      backText: `"Throws" goes in signature: void method() throws Exception {} "Throw" goes in method body: void method() { throw new Exception; }`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Difference between Final, Finally, Finalize?`,
      backText: `Final: Final is a keyword used to apply restrictions on class, method and variable. Final class can't be inherited, final method can't be overridden and final variable value can't be changed. Finally: Finally is a code block used to place important code, it will be executed whether exception is handled or not. Finalize: Finalize is a method used to perform clean up processing just before object is garbage collected`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is Dictionary in Java?`,
      backText: `The Dictionary class is the abstract parent of any class, such as Hashtable , which maps keys to values. Any non- null object can be used as a key and as a value.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Which collection is the fastest?`,
      backText: `In case of index value pair- arraylist, value- hashset and key value pair- hashmap`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an instance variable?`,
      backText: `An attribute, or field of an object.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is the finalize method?`,
      backText: `The method called before garbage collection on any Java object.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an access modifier?`,
      backText: `A keyword that describes who or what can access or modifiy the state of an object. Examples: public, private, default, protected`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an abstract class?`,
      backText: `A class that contains one or more abstract methods, and therefore can never be instantiated. Abstract classes are defined so that other classes can extend them and make them concrete by implementing the abstract methods.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an abstract method?`,
      backText: `A method that has no implementation. ex interface methods are abstract`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an API?`,
      backText: `Application Programming Interface. The specification of how a programmer writing an application accesses the behavior and state of classes and objects.`
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is autoboxing?`,
      backText: `Automatic conversion between reference (Wrapper classes) and primitive types. DONE BY COMPILER`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `what is a class variable?`,
      backText: `A data item associated with a particular class as a whole--not with particular instances of the class. Class variables are defined in class definitions. Also called a static field`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a class path?`,
      backText: `An environmental variable which tells the Java virtual machine and Java technologybased applications where to find the class libraries, including user-defined class libraries.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What does DOM stand for?`,
      backText: `Document object model.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an enumerated type?`,
      backText: `A type whose legal values consist of a fixed set of constants. An example of this would be an enum.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Explaine garbage collection`,
      backText: `The automatic detection and freeing of memory that is no longer in reference. The Java runtime system performs garbage collection so that programmers never explicitly free objects.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Explaine what a generic is`,
      backText: `A class, interface, or method that declares one or more type variables. These type variables are known as type parameters. A generic declaration defines a set of parameterized types, one for each possible invocation of the type parameter section. At runtime, all of these parameterized types share the same class, interface, or method.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Explain type erasure`,
      backText: `The deletion of peramatized types at runtime.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Why use generics?`,
      backText: `(This answer is blank on the excel sheet.)`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Why is java considered dynamic?`,
      backText: `platform-independent file format that aggregates many files into one. Multiple applets written in the Java programming language, and their requisite components can be bundled in a JAR file and subsequently downloaded to a browser in a single HTTP transaction. `,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Explain JAR (Java Archive)`,
      backText: `(This answer is blank on the excel sheet.)`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Why is java considered dynamic?`,
      backText: `platform-independent file format that aggregates many files into one. Multiple applets written in the Java programming language, and their requisite components can be bundled in a JAR file and subsequently downloaded to a browser in a single HTTP transaction.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What does it mean to be multithreaded?`,
      backText: `designed to have parts of its code execute concurrently`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What does it mean to be protected?`,
      backText: `signifies that the method or variable can only be accessed by elements residing in its class, subclasses, or classes in the same package.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is serialization? `,
      backText: `Object created from incoming data (JSON, XML, CSV, whatevs)`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is the difference between a queue and a deque?`,
      backText: `A queue is FIFO (first-in-first-out), a deque has options for FIFO or LIFO (last in first out); it's a queue and a stack in one!`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What are design patterns?`,
      backText: `Design patterns are solutions to general problems that software developers faced during software development.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What are the three basic groups of design patterns?`,
      backText: `Creational, Structural, Behavior`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a singleton?`,
      backText: `It's a design pattern, that ensures a class has only one instance, and provides a global point of access to it. It uses a private constructor to limit object`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a decorator pattern?`,
      backText: `Decorator pattern allows a user to add new functionality to an existing object without altering its structure.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an Observer pattern?`,
      backText: `Defines a one-to-many dependency between objects so that when one object changes state, all of its dependents are notified and updated automatically.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a Factory pattern?`,
      backText: `Defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a Command pattern?`,
      backText: `The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an Adapter pattern?`,
      backText: `Converts the interface of a class into another interface the clients expect. Adapter lets classes work together that couldn’t otherwise because of incompatible interfaces.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a Facade pattern?`,
      backText: `provides a unified interface to a set of interfaces in a subsystem. Facade defines a higher- level interface that makes the subsystem easier to use.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is the difference between Adapter and Facade?`,
      backText: `Adapter links two incompatible interfaces and facade is used when you want an easier or simpler interface to work with.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is template Method pattern?`,
      backText: `Defines the skeleton of an algorithm in a method, deferring some steps to subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the algorithm’s structure.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an anonymous inner class?`,
      backText: `It is an inner class without a name and for which only a single object is created. An anonymous inner class can be useful when making an instance of an object with certain “extras” such as overloading methods of a class or interface, without having to actually subclass a class.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a lambda expression?`,
      backText: `A function that can be created without belonging to any class.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a method reference? `,
      backText: `How java handles passing methods as arguments`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `Explain streams`,
      backText: `Streams process information in parallel - that is, if a stream is parsing a collection, it will do "work" to the elements the collection at the same time, unlike a loop which works on one element at a time before working on the next one`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a functional interface?`,
      backText: `Intefaces that contain only one function that is generally a lambda expression`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `List the functional interfaces and their functional methods. `,
      backText: `Function, BiFunction, Consumer, BiConsumer, Runnable, Supplier, Predicate`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `functional methods. Function, BiFunction, Consumer, BiConsumer, Runnable, Supplier, Predicate What is the difference between java7 and java8?`,
      backText: `7 introduced diamond brackets. 8 introduced streams and lambdas
`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is functional programming `,
      backText: `Programming that avoids changing state`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What are the FIRST principles of TDD?`,
      backText: `Tests should be:
Fast - The code seems to be fast because there is nothing complex about its tests.
Independent - The test doesn't depend on other tests.
Repeatable - The test will get the same result every time.
Self-validating - The test can automatically detect if it's passed.
Timely - Both the code and the test code are presented here at the same time.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is the difference between composition and inheritance?`,
      backText: `Composition is instantiating a class as a field ("has a" relationship). Inheritance is inheriting all fields and methods from parent class ("is a" relationship)`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is a thread?`,
      backText: `The path followed when executing a program; all programs have at least 1 thread (known as the main thread)`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What is an advantage of Java (with its JVM) over other languages that work from the hardware?`,
      backText: `The JVM can be run on any platform, making it dynamic. C++, for instance, runs on the hardware, so it is not dynamic.`,
    },
    {
      backgroundColor: `#31587A`,
      frontText: `What does the word static mean?`,
      backText: `In Java, a static member is a member of a class that isn’t associated with an instance of a class. Instead, the member belongs to the class itself. As a result, you can access the static member without first creating a class instance.`,
    },
  ]
}
