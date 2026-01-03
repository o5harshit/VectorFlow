import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const DelayNode = () => {
  const [delayTime, setDelayTime] = useState(1000);

  return (
    <BaseNode title="Delay" inputs={["input"]} outputs={["output"]}>
      <div className="space-y-2">
        <label className="text-slate-300 text-sm">Delay (ms):</label>
        <input
          type="number"
          value={delayTime}
          onChange={(e) => setDelayTime(e.target.value)}
          min="0"
          step="100"
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
            [&::-webkit-outer-spin-button]:appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
            [-moz-appearance:textfield]
          "
          placeholder="1000"
        />
      </div>
    </BaseNode>
  );
};;;