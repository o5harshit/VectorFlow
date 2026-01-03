import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const FormatterNode = () => {
  const [formatType, setFormatType] = useState("json");

  return (
    <BaseNode title="Formatter" inputs={["input"]} outputs={["output"]}>
      <div className="space-y-2">
        <label className="text-slate-300 text-sm">Format Type:</label>
        <select
          value={formatType}
          onChange={(e) => setFormatType(e.target.value)}
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
          <option value="json">JSON</option>
          <option value="xml">XML</option>
          <option value="csv">CSV</option>
          <option value="text">Plain Text</option>
        </select>
      </div>
    </BaseNode>
  );
};