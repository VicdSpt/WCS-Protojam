import { useDroppable } from "@dnd-kit/core";
import { type CodeBlock } from "../types";

interface DropZoneProps {
  droppedBlocks: CodeBlock[];
}

function DropZone({ droppedBlocks }: DropZoneProps) {
  const { setNodeRef, isOver } = useDroppable({ id: "dropzone" });

  return (
    <div className={`min-h-24 w-full border-2 border-dashed rounded-lg flex flex-wrap gap-2 p-2 ${isOver ? "border-blue-500 bg-blue-200" : "border-gray-400 bg-blue-100"}`} ref={setNodeRef}>
      {droppedBlocks.map((block) => (
        <span key={block.id}>{block.content}</span>
      ))}
    </div>
  );
}

export default DropZone;
