import { useState } from "react";
import { type ExerciseType, type CodeBlock as CodeBlockType } from "../types";
import CodeBlock from "./CodeBlock";
import DropZone from "./DropZone";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  DragOverlay,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import type { DragStartEvent } from "@dnd-kit/core";

interface ExerciseProps {
  exercise: ExerciseType;
  onCorrect: () => void;
  onWrong: () => void;
}

function Exercises({ exercise, onCorrect, onWrong }: ExerciseProps) {
  const [droppedBlocks, setDroppedBlocks] = useState<CodeBlockType[]>([]);
  const [activeBlock, setActiveBlock] = useState<CodeBlockType | null>(null);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const found = exercise.blocks.find((block) => block.id === event.active.id);
    if (found) setActiveBlock(found);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const draggedBlockId = event.active.id;
    const foundBlock = exercise.blocks.find(
      (block) => block.id === draggedBlockId,
    );
    if (
      foundBlock &&
      event.over?.id === "dropzone" &&
      !droppedBlocks.find((myBlock) => myBlock.id === foundBlock.id)
    ) {
      setDroppedBlocks((prev) => [...prev, foundBlock]);
    }
    setActiveBlock(null);
  };

  const isCorrect =
    droppedBlocks.map((myBlock) => myBlock.id).join(",") ===
    exercise.answer.join(",");

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
    >
      <div className="min-h-screen flex flex-col items-center p-8">
        <DragOverlay>
          {activeBlock ? <CodeBlock block={activeBlock} /> : null}
        </DragOverlay>

        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-2">
            Question
          </p>
          <div className="text-white text-center text-lg font-semibold font-mono">
            {exercise.question}
          </div>
        </div>

        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-6 shadow-xl">
          <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-4">
            Blocks
          </p>
          <div className="flex flex-row flex-wrap gap-3">
            {exercise.blocks
            .filter((block) => !droppedBlocks.find((dropped) => dropped.id === block.id))
            .map((block) => (
              <CodeBlock key={block.id} block={block} />
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl mb-6">
          <p className="text-xs uppercase tracking-widest text-indigo-300 font-semibold mb-2">
            Drop here
          </p>
          <DropZone droppedBlocks={droppedBlocks} />
        </div>

        {feedback && (
          <div className={`w-full max-w-2xl text-center font-bold py-3 rounded-xl mb-3 ${
            feedback === "correct"
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
              : "bg-red-500/20 text-red-300 border border-red-500/30"
          }`}>
            {feedback === "correct" ? "✓ Correct!" : "✗ Wrong!"}
          </div>
        )}

        <div className="flex gap-3">
          <button
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl cursor-pointer transition-colors shadow-lg shadow-indigo-500/20"
            onClick={() => {
              if (isCorrect) {
                setFeedback("correct");
                onCorrect();
                setDroppedBlocks([]);
              } else {
                setFeedback("wrong");
                onWrong();
              }
              setTimeout(() => setFeedback(null), 1500);
            }}
          >
            Check Answer
          </button>
          <button
            className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl cursor-pointer transition-colors border border-white/20"
            onClick={() => {
              setDroppedBlocks([]);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </DndContext>
  );
}

export default Exercises;
