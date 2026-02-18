import { Exercise } from "../types";

export const exercises: Exercise[] = [
  {
    id: 1,
    question: "Reconstruct: console.log('hello')",
    blocks: [
      { id: 1, content: "console.log(" },
      { id: 2, content: "'hello'" },
      { id: 3, content: ")" },
      { id: 4, content: "print" }, // trap block!
    ],
    answer: [1, 2, 3],
  },
  {
    id: 2,
    question: "Reconstruct: let x = 5;",
    blocks: [
      { id: 5, content: "let " },
      { id: 6, content: "x" },
      { id: 7, content: " = " },
      { id: 8, content: "5" },
      { id: 9, content: ";" },
      { id: 10, content: "var" }, // trap block!
    ],
    answer: [5, 6, 7, 8, 9],
  },
  {
    id: 3,
    question: "Reconstruct: if (x > 10) {}",
    blocks: [
      { id: 11, content: "if (" },
      { id: 12, content: "x" },
      { id: 13, content: " > " },
      { id: 14, content: "10" },
      { id: 15, content: ") {" },
      { id: 16, content: "}" },
      { id: 17, content: "while" }, // trap block!
    ],
    answer: [11, 12, 13, 14, 15, 16],
  },
  {
    id: 4,
    question: "Reconstruct: function greet() {}",
    blocks: [
      { id: 18, content: "function " },
      { id: 19, content: "greet" },
      { id: 20, content: "()" },
      { id: 21, content: " {" },
      { id: 22, content: "}" },
      { id: 23, content: "=>" }, // trap block!
    ],
    answer: [18, 19, 20, 21, 22],
  },
  {
    id: 5,
    question: "Reconstruct: return true;",
    blocks: [
      { id: 24, content: "return " },
      { id: 25, content: "true" },
      { id: 26, content: ";" },
      { id: 27, content: "false" }, // trap block!
    ],
    answer: [24, 25, 26],
  },
  {
    id: 6,
    question: "Reconstruct: const name = 'Alex';",
    blocks: [
      { id: 28, content: "const " },
      { id: 29, content: "name" },
      { id: 30, content: " = " },
      { id: 31, content: "'Alex'" },
      { id: 32, content: ";" },
      { id: 33, content: "let" }, // trap block!
    ],
    answer: [28, 29, 30, 31, 32],
  },
  {
    id: 7,
    question: "Reconstruct: for (let i = 0; i < 3; i++) {}",
    blocks: [
      { id: 34, content: "for (" },
      { id: 35, content: "let " },
      { id: 36, content: "i" },
      { id: 37, content: " = 0; " },
      { id: 38, content: "i < 3; " },
      { id: 39, content: "i++" },
      { id: 40, content: ") {" },
      { id: 41, content: "}" },
      { id: 42, content: "while" }, // trap block!
    ],
    answer: [34, 35, 36, 37, 38, 39, 40, 41],
  },
  {
    id: 8,
    question: "Reconstruct: x += 2;",
    blocks: [
      { id: 43, content: "x" },
      { id: 44, content: " += " },
      { id: 45, content: "2" },
      { id: 46, content: ";" },
      { id: 47, content: "-=" }, // trap block!
    ],
    answer: [43, 44, 45, 46],
  },
  {
    id: 9,
    question: "Reconstruct: console.error('fail');",
    blocks: [
      { id: 48, content: "console.error(" },
      { id: 49, content: "'fail'" },
      { id: 50, content: ")" },
      { id: 51, content: ";" },
      { id: 52, content: "console.log" }, // trap block!
    ],
    answer: [48, 49, 50, 51],
  },
  {
    id: 10,
    question: "Reconstruct: typeof x === 'number';",
    blocks: [
      { id: 53, content: "typeof " },
      { id: 54, content: "x" },
      { id: 55, content: " === " },
      { id: 56, content: "'number'" },
      { id: 57, content: ";" },
      { id: 58, content: "'string'" }, // trap block!
    ],
    answer: [53, 54, 55, 56, 57],
  },
];
