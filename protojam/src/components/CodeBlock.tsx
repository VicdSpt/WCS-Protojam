import { type CodeBlock as CodeBlockType} from "../types";
import { useDraggable } from "@dnd-kit/core";

interface CodeBlockProps {
  block: CodeBlockType;
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
