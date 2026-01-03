import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const MergeNode = () => {
  const [mergeType, setMergeType] = useState("concatenate");

  return (
    <BaseNode title="Merge" inputs={["input1", "input2"]} outputs={["output"]}>
      <div className="space-y-2">
        <label className="text-slate-300 text-sm">Merge Type:</label>
        <select
          value={mergeType}
          onChange={(e) => setMergeType(e.target.value)}
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
          <option value="concatenate">Concatenate</option>
          <option value="combine">Combine Objects</option>
          <option value="merge">Merge Arrays</option>
          <option value="union">Union</option>
        </select>
      </div>
    </BaseNode>
  );
};