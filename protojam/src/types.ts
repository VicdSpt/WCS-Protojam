export type CodeBlock = {
  id: number;
  content: string;
};

export type ExerciseType = {
  id: number;
  question: string;
  blocks: CodeBlock[];
  answer: number[];
};

export type GameState = {
  exercise: ExerciseType[];
  index: number;
  score: number;
  blocks: CodeBlock[];
};