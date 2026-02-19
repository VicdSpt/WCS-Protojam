import { type ExerciseType } from "../types";


const exercises: ExerciseType[] = [
  {
    id: 1,
    question: "Write the correct sentence: console.log('hello')",
    blocks: [
      { id: 4, content: "print" }, // trap block!
      { id: 2, content: "'hello'" },
      { id: 1, content: "console.log(" },
      { id: 3, content: ")" },
    ],
    answer: [1, 2, 3],
  },
  {
    id: 2,
    question: "Write the correct sentence: let x = 5;",
    blocks: [
      { id: 10, content: "var" }, // trap block!
      { id: 7, content: " = " },
      { id: 5, content: "let " },
      { id: 9, content: ";" },
      { id: 6, content: "x" },
      { id: 8, content: "5" },
    ],
    answer: [5, 6, 7, 8, 9],
  },
  {
    id: 3,
    question: "Write the correct sentence: if (x > 10) {}",
    blocks: [
      { id: 17, content: "while" }, // trap block!
      { id: 13, content: " > " },
      { id: 11, content: "if (" },
      { id: 16, content: "}" },
      { id: 14, content: "10" },
      { id: 12, content: "x" },
      { id: 15, content: ") {" },
    ],
    answer: [11, 12, 13, 14, 15, 16],
  },
  {
    id: 4,
    question: "Write the correct sentence: function greet() {}",
    blocks: [
      { id: 23, content: "=>" }, // trap block!
      { id: 20, content: "()" },
      { id: 18, content: "function " },
      { id: 22, content: "}" },
      { id: 19, content: "greet" },
      { id: 21, content: " {" },
    ],
    answer: [18, 19, 20, 21, 22],
  },
  {
    id: 5,
    question: "Write the correct sentence: return true;",
    blocks: [
      { id: 27, content: "false" }, // trap block!
      { id: 25, content: "true" },
      { id: 24, content: "return " },
      { id: 26, content: ";" },
    ],
    answer: [24, 25, 26],
  },
  {
    id: 6,
    question: "Write the correct sentence: const name = 'Alex';",
    blocks: [
      { id: 31, content: "'Alex'" },
      { id: 33, content: "let" }, // trap block!
      { id: 28, content: "const " },
      { id: 30, content: " = " },
      { id: 32, content: ";" },
      { id: 29, content: "name" },
    ],
    answer: [28, 29, 30, 31, 32],
  },
  {
    id: 7,
    question: "Write the correct sentence: for (let i = 0; i < 3; i++) {}",
    blocks: [
      { id: 42, content: "while" }, // trap block!
      { id: 36, content: "i" },
      { id: 39, content: "i++" },
      { id: 34, content: "for (" },
      { id: 41, content: "}" },
      { id: 37, content: " = 0; " },
      { id: 35, content: "let " },
      { id: 40, content: ") {" },
      { id: 38, content: "i < 3; " },
    ],
    answer: [34, 35, 36, 37, 38, 39, 40, 41],
  },
  {
    id: 8,
    question: "Write the correct sentence: x += 2;",
    blocks: [
      { id: 47, content: "-=" }, // trap block!
      { id: 45, content: "2" },
      { id: 43, content: "x" },
      { id: 46, content: ";" },
      { id: 44, content: " += " },
    ],
    answer: [43, 44, 45, 46],
  },
  {
    id: 9,
    question: "Write the correct sentence: console.error('fail');",
    blocks: [
      { id: 52, content: "console.log" }, // trap block!
      { id: 50, content: ")" },
      { id: 48, content: "console.error(" },
      { id: 51, content: ";" },
      { id: 49, content: "'fail'" },
    ],
    answer: [48, 49, 50, 51],
  },
  {
    id: 10,
    question: "Write the correct sentence: typeof x === 'number';",
    blocks: [
      { id: 56, content: "'number'" },
      { id: 58, content: "'string'" }, // trap block!
      { id: 53, content: "typeof " },
      { id: 57, content: ";" },
      { id: 55, content: " === " },
      { id: 54, content: "x" },
    ],
    answer: [53, 54, 55, 56, 57],
  },
];

export default exercises;
