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
      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-emerald-300 font-mono text-sm font-semibold rounded-xl cursor-grab active:cursor-grabbing border border-slate-500 shadow-md transition-colors select-none"
      {...listeners}
      {...attributes}
    >
      {block.content}
    </button>
  );
}

export default CodeBlock;
