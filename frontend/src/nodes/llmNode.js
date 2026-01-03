import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const LLMNode = () => {
  const [model, setModel] = useState("gpt-3.5-turbo");

  return (
    <BaseNode title="LLM" inputs={["prompt"]} outputs={["response"]}>
      <div className="space-y-2">
        <label className="text-slate-300 text-sm">Model:</label>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
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
          <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
          <option value="gpt-4">GPT-4</option>
          <option value="claude-2">Claude 2</option>
          <option value="llama-2">Llama 2</option>
        </select>
      </div>
    </BaseNode>
  );
};
