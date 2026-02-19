import { useDroppable } from "@dnd-kit/core";
import { type CodeBlock } from "../types";

interface DropZoneProps {
  droppedBlocks: CodeBlock[];
}

function DropZone({ droppedBlocks }: DropZoneProps) {
  const { setNodeRef, isOver } = useDroppable({ id: "dropzone" });

  return (
    <div className={`min-h-24 w-full border-2 border-dashed rounded-2xl flex flex-wrap gap-2 p-4 transition-colors ${isOver ? "border-indigo-400 bg-indigo-900/50 shadow-lg shadow-indigo-500/20" : "border-white/20 bg-white/5"}`} ref={setNodeRef}>
      {droppedBlocks.map((block) => (
        <span key={block.id} className="px-3 py-1.5 bg-indigo-600/80 text-white font-mono text-sm rounded-lg border border-indigo-400/50">{block.content}</span>
      ))}
    </div>
  );
}

export default DropZone;
