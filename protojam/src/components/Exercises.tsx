import { useState } from "react";
import { type ExerciseType, type CodeBlock } from "../types";
import CodeBlock from "./CodeBlock";
import DropZone from "./DropZone";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";


interface ExerciseProps {
  exercise: ExerciseType;
  onCorrect: () => void;
}

function Exercices({ exercise, onCorrect }: ExerciseProps) {
  const [droppedBlocks, setDroppedBlocks] = useState<CodeBlock[]>([]);

  const handleDragEnd = (event: DragEndEvent) => {
    const draggedBlockId = event.active.id
    const foundBlock = exercise.blocks.find(block => block.id === draggedBlockId)
    if(foundBlock){
        setDroppedBlocks(prev => [...prev, foundBlock])
    }
  };

  const isCorrect = droppedBlocks.map(myBlock => myBlock.id).join(",") === exercise.answer.join(",")

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div>
        <div>
          <div>{exercise.question}</div>
        </div>
        {exercise.blocks.map((block) => (
          <CodeBlock key={block.id} block={block} />
        ))}

        <DropZone droppedBlocks={droppedBlocks} />
        <button onClick={() => {if(isCorrect){onCorrect()}}}>Check Answer</button>
      </div>
    </DndContext>
  );
}

export default Exercices;
