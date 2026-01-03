import { Handle, Position } from "reactflow";

export const BaseNode = ({ title, inputs = [], outputs = [], children, className = "" }) => {
  return (
    <div className={`bg-slate-800 border border-slate-600 rounded-xl p-3 text-white w-56 shadow-lg relative ${className}`}>
      {/* Header */}
      <div className="text-sm font-semibold mb-2 border-b border-slate-600 pb-1">
        {title}
      </div>

      {/* Content */}
      <div className="text-sm relative">{children}</div>

      {/* Input Handles */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          id={id}
          type="target"
          position={Position.Left}
          style={{
            top: `${40 + index * 25}%`,
            left: '-6px'
          }}
          className="!bg-slate-400 !w-3 !h-3 !border-0 !absolute"
        />
      ))}

      {/* Output Handles */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          id={id}
          type="source"
          position={Position.Right}
          style={{
            top: `${40 + index * 25}%`,
            right: '-6px'
          }}
          className="!bg-slate-400 !w-3 !h-3 !border-0 !absolute"
        />
      ))}
    </div>
  );
};
