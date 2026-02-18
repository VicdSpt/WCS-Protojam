import { CodeBlock } from "../types";
import { useDraggable } from "@dnd-kit/react";

interface CodeBlockProps {
  block: CodeBlock;
}

function CodeBlock({ block }: CodeBlockProps) {
  const { ref, listeners, attributes } = useDraggable({id: block.id});

  return (
    <div>
      <button ref={ref} {...listeners} {...attributes}>
        {block.content}
      </button>
    </div>
  );
}

export default CodeBlock;
