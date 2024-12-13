import { useState } from "react";

const jsQuestions = [
  {
    id: 0,
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer:
      "'==' compares values for equality after type coercion, while '===' compares values and types without type coercion.",
  },
  {
    id: 1,
    question: "What are closures in JavaScript?",
    answer:
      "A closure is a function that remembers and accesses variables from its outer scope, even when the outer function has returned.",
  },
  {
    id: 2,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer:
      "'this' refers to the object that is currently executing the function. Its value depends on how the function is called.",
  },
  {
    id: 3,
    question: "What is the difference between 'var', 'let', and 'const'?",
    answer:
      "'var' is function-scoped and can be redeclared. 'let' is block-scoped and cannot be redeclared. 'const' is also block-scoped but is used for constants and cannot be reassigned.",
  },
];

export default function App() {
  const [currOpen, setCurropen] = useState(null);

  return (
    <div className="container">
      <Accordian
        questions={jsQuestions}
        currOpen={currOpen}
        setCurropen={setCurropen}
      />
    </div>
  );
}

function Accordian({ questions, currOpen, setCurropen, onOpen }) {
  return (
    <div className="accordian-container">
      <h1>JavaScript FAQs</h1>
      {questions.map((question, i) => (
        <AccordianItem
          question={question}
          num={i}
          currOpen={currOpen}
          setCurropen={setCurropen}
          key={i}
        />
      ))}
    </div>
  );
}

function AccordianItem({ question, currOpen, setCurropen, num }) {
  const isOpen = num === currOpen;
  function handleOpen() {
    setCurropen(isOpen ? null : num);
  }
  return (
    <>
      <div className="accordian-question" onClick={handleOpen}>
        <p>{question.question}</p>
        <Button isOpen={isOpen}>{isOpen ? "-" : "+"}</Button>
      </div>
      {isOpen && (
        <div className="answer">
          <p>{question.answer}</p>
        </div>
      )}
    </>
  );
}

function Button({ children, isOpen }) {
  return <button className={isOpen ? "" : "not-selected"}>{children}</button>;
}
