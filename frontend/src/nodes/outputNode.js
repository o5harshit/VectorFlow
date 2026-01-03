import { useState, useRef, useEffect } from "react";
import { BaseNode } from "./BaseNode";

export const OutputNode = () => {
  const [outputValue, setOutputValue] = useState("");
  const [outputType, setOutputType] = useState("text");
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [outputValue]);

  return (
    <BaseNode title="Output" inputs={["input"]}>
      <div className="space-y-2">
        <textarea
          ref={textareaRef}
          value={outputValue}
          onChange={(e) => setOutputValue(e.target.value)}
          className="
            w-full
            bg-slate-700
            text-white
            rounded-md
            p-2
            text-sm
            resize-none
            overflow-hidden
            focus:outline-none
            focus:ring-2
            focus:ring-sky-400
          "
          placeholder="Output value"
          rows={1}
        />
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          className="
            w-full
            bg-slate-700
            text-white
            rounded-md
            p-2
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-sky-400
          "
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="json">JSON</option>
          <option value="boolean">Boolean</option>
        </select>
      </div>
    </BaseNode>
  );
};;;
