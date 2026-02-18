export  type CodeBlock = {
  id: number;
  content: string;
};

export  type Exercise = {
  id: number;
  question: string;
  blocks: CodeBlock[];
  answer: number[];
};

export  type GameState = {
  exercise: Exercise[];
  index: number;
  score: number;
  blocks: CodeBlock[];
};
