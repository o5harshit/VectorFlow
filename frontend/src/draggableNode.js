// draggableNode.js

export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  const getNodeColor = (type) => {
    const colors = {
      customInput: 'bg-blue-600 hover:bg-blue-700',
      llm: 'bg-purple-600 hover:bg-purple-700',
      customOutput: 'bg-green-600 hover:bg-green-700',
      text: 'bg-yellow-600 hover:bg-yellow-700',
      logger: 'bg-red-600 hover:bg-red-700',
      formatter: 'bg-indigo-600 hover:bg-indigo-700',
      merge: 'bg-pink-600 hover:bg-pink-700',
      delay: 'bg-orange-600 hover:bg-orange-700',
    };
    return colors[type] || 'bg-gray-600 hover:bg-gray-700';
  };

  return (
    <div
      className={`${type} cursor-grab min-w-16 h-12 flex flex-col items-center justify-center ${getNodeColor(type)} rounded-lg p-1 hover:scale-105 transition-all duration-200 shadow-md`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
      title={`Drag to add ${label} node`}
    >
      <div className="text-lg mb-0.5">{icon}</div>
      <span className="text-white text-xs font-medium text-center leading-tight">{label}</span>
    </div>
  );
};
