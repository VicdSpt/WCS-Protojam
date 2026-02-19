import { type CodeBlock as CodeBlockType} from "../types";
import { useDraggable } from "@dnd-kit/core";

interface CodeBlockProps {
  block: CodeBlockType;
}

function CodeBlock({ block }: CodeBlockProps) {
  const { setNodeRef, listeners, attributes } = useDraggable({id: block.id});

  return (
    <button
      ref={setNodeRef}
      className="px-3 py-1 bg-gray-300 rounded font-mono text-2xl cursor-grab"
      {...listeners}
      {...attributes}
    >
      {block.content}
    </button>
  );
}

export default CodeBlock;
