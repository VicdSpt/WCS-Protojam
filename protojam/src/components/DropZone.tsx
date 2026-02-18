import { useDroppable } from "@dnd-kit/core";
import { CodeBlock } from "../types";

interface DropZoneProps {
  droppedBlocks: CodeBlock[];
}

function DropZone({ droppedBlocks }: DropZoneProps) {
  const { setNodeRef, isOver } = useDroppable({ id: "dropzone" });

  return (
    <div ref={setNodeRef} style={{ width: 300, height: 300 }}>
      {droppedBlocks.map((block) => (
        <span key={block.id}>{block.content}</span>
      ))}
    </div>
  );
}

export default DropZone;
