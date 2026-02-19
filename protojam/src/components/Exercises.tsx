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
}

function Exercises({ exercise, onCorrect }: ExerciseProps) {
  const [droppedBlocks, setDroppedBlocks] = useState<CodeBlockType[]>([]);
  const [activeBlock, setActiveBlock] = useState<CodeBlockType | null>(null);

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
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
        <DragOverlay>
          {activeBlock ? <CodeBlock block={activeBlock} /> : null}
        </DragOverlay>
        <div className="text-2xl font-bold mb-6">
          <div className="flex flex-wrap gap-2 mb-6">{exercise.question}</div>
        </div>
        <div className="flex flex-row flex-wrap gap-2 mb-6">
          {exercise.blocks.map((block) => (
            <CodeBlock key={block.id} block={block} />
          ))}
        </div>

        <DropZone droppedBlocks={droppedBlocks} />

        <div>
          <button
            className="mt-4 px-6 bg-blue-800 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
            onClick={() => {
              if (isCorrect) {
                onCorrect();
                setDroppedBlocks([]);
              }
            }}
          >
            Check Answer
          </button>
          <button className="mt-4 px-6 bg-red-800 text-white rounded-lg hover:bg-red-700 cursor-pointer" onClick={() => {setDroppedBlocks([])}}>
            Reset
          </button>
        </div>
      </div>
    </DndContext>
  );
}

export default Exercises;
