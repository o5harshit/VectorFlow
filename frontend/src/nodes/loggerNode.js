import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const LoggerNode = () => {
  const [logLevel, setLogLevel] = useState("info");

  return (
    <BaseNode title="Logger" inputs={["input"]} outputs={[]}>
      <div className="space-y-2">
        <label className="text-slate-300 text-sm">Log Level:</label>
        <select
          value={logLevel}
          onChange={(e) => setLogLevel(e.target.value)}
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
          <option value="debug">Debug</option>
          <option value="info">Info</option>
          <option value="warn">Warning</option>
          <option value="error">Error</option>
        </select>
      </div>
    </BaseNode>
  );
};